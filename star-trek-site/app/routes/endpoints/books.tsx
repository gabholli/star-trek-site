import { useState } from "react"
import type { LoaderFunctionArgs } from "react-router"
import { Form, Link, useLoaderData, useNavigate } from "react-router"
import type { Book } from "~/types.tsx/types"

export async function clientLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const pageNumber = parseInt(url.searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(url.searchParams.get("pageSize") ?? "10", 10)

    const response = await fetch(`https://stapi.co/api/v2/rest/book/search?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    const data = await response.json()

    const totalResults = data.page?.totalElements ?? 0
    const totalPages = Math.ceil(totalResults / pageSize)

    return { books: data.books, totalPages }
}

export default function Books() {
    const { books, totalPages } = useLoaderData()
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(window.location.search)
    const pageNumber = parseInt(searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(searchParams.get("pageSize") ?? "10", 10)

    const [pageGroup, setPageGroup] = useState(Math.floor((pageNumber - 1) / 10))
    console.log("Total Pages:", totalPages)

    console.log("Current Page:", pageNumber)

    function handlePageChange(page: number) {
        navigate(`?pageNumber=${page}&pageSize=${pageSize}`)
    }

    function handleNextGroup() {
        if ((pageGroup + 1) * 10 < totalPages) {
            setPageGroup(pageGroup + 1)
        }
    }

    function handlePreviousGroup() {
        setPageGroup(Math.max(pageGroup - 1, 0))
    }

    const bookMap = books?.map((book: Book) => (
        <div key={book.uid}>
            <Link to={book.uid}>{book.title}</Link>
        </div>
    ))

    const startPage = pageGroup * 10 + 1
    const endPage = Math.min(startPage + 9, totalPages)

    const pageButtons = []
    for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={i === pageNumber ? "active" : ""}
            >
                {i}
            </button>
        )
    }

    return (
        <main className="flex flex-col justify-center items-center gap-y-4">
            {/* <Form method="get">
                <input
                    className="text-black"
                    type="text"
                    name="query"
                    defaultValue={searchParams.get("query") ?? ""}
                    placeholder="Search books..."
                />
                <button type="submit">Search</button>
            </Form> */}
            <h1 className="text-center underline text-3xl">List of books:</h1>
            <div className="flex flex-col justify-center items-center text-center text-2xl gap-y-4
                md:grid Md:grid-cols-2">
                {bookMap}
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
                {/* <div className="flex gap-x-4">
                    {pageNumber > 1 && (
                        <button onClick={() => handlePageChange(pageNumber - 1)}>Previous</button>
                    )}
                    {pageNumber < totalPages && (
                        <button onClick={() => handlePageChange(pageNumber + 1)}>Next</button>
                    )}
                </div> */}
                <div className="flex gap-x-4">
                    {pageGroup > 0 && (<button onClick={handlePreviousGroup}>{"<<<"}</button>)}
                    {pageGroup < Math.ceil(totalPages / 10) - 1 && (<button onClick={handleNextGroup}>{">>>"}</button>)}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {pageButtons}
                </div>
            </div>
        </main>
    )
}
