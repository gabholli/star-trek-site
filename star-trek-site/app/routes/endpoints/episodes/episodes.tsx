import { useState } from "react"
import type { LoaderFunctionArgs } from "react-router"
import { Form, Link, useLoaderData, useNavigate } from "react-router"
import type { Book, Episode } from "~/types/types"
import Pagination from "~/utils/Pagination"

export async function clientLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const pageNumber = parseInt(url.searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(url.searchParams.get("pageSize") ?? "10", 10)

    const response = await fetch(`https://stapi.co/api/v1/rest/episode/search?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    const data = await response.json()
    console.log(data)

    const totalResults = data.page?.totalElements ?? 0
    const totalPages = Math.ceil(totalResults / pageSize)

    return { episodes: data.episodes, totalPages }
}

export default function Episodes() {
    const { episodes, totalPages } = useLoaderData()
    const searchParams = new URLSearchParams(window.location.search)
    const pageNumber = parseInt(searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(searchParams.get("pageSize") ?? "10", 10)

    const [pageGroup, setPageGroup] = useState(Math.floor((pageNumber - 1) / 10))

    const episodeMap = episodes?.map((episode: Episode) => (
        <div key={episode.uid}>
            <Link
                to={episode.uid}
                className="lg:hover:underline"
            >
                {episode.title}
            </Link>
        </div>
    ))

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
            <h1 className="text-center text-3xl font-bold text-blue-400">List of episodes:</h1>
            <div className="flex flex-col justify-center items-center text-center text-2xl gap-y-4">
                {episodeMap}
            </div>
            <Pagination
                totalPages={totalPages}
                pageNumber={pageNumber}
                pageSize={pageSize}
                pageGroup={pageGroup}
                setPageGroup={setPageGroup}
            />
        </main>
    )
}
