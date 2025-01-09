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
            <h1 className="text-3xl font-bold">Details about {data.book.title}:</h1>
            <div className="flex flex-col justify-center items-center gap-y-4 text-xl text-center">
                {data.book.publishedMonth && data.book.publishedDay && data.book.publishedYear && (
                    <h2>
                        <span className="text-2xl">Publish date: </span>{data.book.publishedMonth}/{data.book.publishedDay}/{data.book.publishedYear}
                    </h2>
                )}
                {data.book.anthology !== undefined && data.book.anthology !== null &&
                    <h2><span className="text-2xl">Anthology: </span>{data.book.anthology ? "Yes" : "No"}</h2>
                }
                {data.book.audiobook !== undefined && data.book.audiobook !== null &&
                    <h2><span className="text-2xl">Audiobook available: </span>{data.book.audiobook ? "Yes" : "No"}</h2>
                }
                {data.book.authors.length > 0 && (
                    <div className="flex flex-col md:flex-row items-center md:gap-x-2 gap-y-2">
                        <h2 className="text-2xl">Authors: </h2>
                        {data.book.authors && data.book.authors?.map((author: any, index: number) => (
                            <h2
                                className="self-end text-xl"
                                key={author.uid}>
                                {author.name}
                                {index < data.book.authors.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
                {data.book.characters.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Characters: </h2>
                        {data.book.characters && data.book.characters?.map((characters: any, index: number) => (
                            <h2
                                className="self-end text-xl"
                                key={characters.uid}>
                                {characters.name}
                                {index < data.book.characters.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
                {data.book.numberOfPages !== undefined && data.book.numberOfPages !== null &&
                    <h2><span className="text-2xl">Number of pages: </span>{data.book.numberOfPages}</h2>
                }
                {data.book.publishers.length > 0 && (
                    <div className="flex flex-col items-center lg:flex-row gap-2">
                        <h2 className="text-2xl">Publishers: </h2>
                        {data.book.publishers && data.book.publishers?.map((publishers: any, index: number) => (
                            <h2
                                className="self-end text-xl"
                                key={publishers.uid}>
                                {publishers.name}
                                {index < data.book.publishers.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
