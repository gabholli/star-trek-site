import { useLoaderData } from "react-router"
import type { Route } from "../+types/endpoints"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const bookId = params.bookId
    const res = await fetch(
        `https://stapi.co/api/v2/rest/book?uid=${bookId}`
    )
    return await res.json()
}

export default function BookDetail() {
    const data = useLoaderData()
    console.log(data)
    return (
        <main className="flex flex-col justify-center items-center text-center
         gap-y-4">
            <h1 className="text-3xl">Details about {data.book.title}:</h1>
            <div className="flex flex-col justify0-center items-centers gap-y-4 text-2xl text-center">
                {data.book.publishedMonth && data.book.publishedDay && data.book.publishedYear && (
                    <h2>
                        Publish date: {data.book.publishedMonth}/{data.book.publishedDay}/{data.book.publishedYear}
                    </h2>
                )}
                {data.book.anthology !== undefined && data.book.anthology !== null &&
                    <h2>Anthology: {data.book.anthology ? "Yes" : "No"}</h2>
                }
                {data.book.audiobook !== undefined && data.book.audiobook !== null &&
                    <h2>Audiobook available: {data.book.audiobook ? "Yes" : "No"}</h2>
                }
            </div>
        </main>
    )
}
