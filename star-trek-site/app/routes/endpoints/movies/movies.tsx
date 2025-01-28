import { useState } from "react"
import type { LoaderFunctionArgs } from "react-router"
import { Form, Link, useLoaderData, useNavigate } from "react-router"
import type { Book, Episode, Movie } from "~/types/types"

export async function clientLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const pageNumber = parseInt(url.searchParams.get("pageNumber") ?? "1", 10)
    const pageSize = parseInt(url.searchParams.get("pageSize") ?? "10", 10)

    const response = await fetch(`https://stapi.co/api/v1/rest/movie/search`)
    const data = await response.json()
    console.log(data)

    return { movies: data.movies }
}

export default function Movies() {
    const { movies } = useLoaderData()
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(window.location.search)

    const movieMap = movies?.map((movie: Movie) => (
        <div
            key={movie.uid}
        >
            <Link
                className="lg:hover:underline"
                to={movie.uid}
            >
                {movie.title}
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
            <h1 className="text-center text-3xl font-bold text-blue-400">List of movies:</h1>
            <div className="flex flex-col justify-center items-center text-center text-2xl gap-y-4">
                {movieMap}
            </div>
        </main>
    )
}
