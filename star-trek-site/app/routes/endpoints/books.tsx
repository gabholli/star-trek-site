import type { Key } from "react"
import { Link, useLoaderData } from "react-router"
import type { Book } from "~/types.tsx/types"

export async function clientLoader() {
    const response = await fetch("https://stapi.co/api/v2/rest/book/search")
    const data = response.json()
    return data
}


export default function Books() {
    const data = useLoaderData()
    console.log(data.books)

    const bookMap = data.books?.map((book: Book) => {
        return (
            <div key={book.uid}>
                <Link to={book.uid}>{book.title}</Link>
            </div >
        )
    })

    return (
        <main>
            <h1>List of books:</h1>
            <div>
                {bookMap}
            </div>
        </main>
    )
}
