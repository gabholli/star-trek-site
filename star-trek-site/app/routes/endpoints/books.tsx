import { useState } from "react"
import type { LoaderFunctionArgs } from "react-router"
import { Form, Link, useLoaderData, useNavigate } from "react-router"
import type { Book } from "~/types.tsx/types"

export async function clientLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const pageNumber = parseInt(url.searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(url.searchParams.get("pageSize") ?? "10", 10)
    const searchQuery = url.searchParams.get("query") ?? ""

    const response = await fetch(`https://stapi.co/api/v2/rest/book/search?pageNumber=${pageNumber}&pageSize=${pageSize}&title=${searchQuery}`)
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
        navigate(`?pageNumber=${page}&pageSize=${pageSize}&query=${searchParams.get("query") ?? ""}`)
    }

    function handleNextGroup() {
        setPageGroup(pageGroup + 1)
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
        <main>
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
            <h1>List of books:</h1>
            <div>{bookMap}</div>
            <div>
                {pageGroup > 0 && (<button onClick={handlePreviousGroup}>Previous 10</button>)}
                {pageNumber > 1 && (
                    <button onClick={() => handlePageChange(pageNumber - 1)}>Previous</button>
                )}
                {pageButtons}
                {pageNumber < totalPages && (
                    <button onClick={() => handlePageChange(pageNumber + 1)}>Next</button>
                )}
                {pageGroup < Math.floor(totalPages / 10) && (<button onClick={handleNextGroup}>Next 10</button>)}
            </div>
        </main>
    )
}
