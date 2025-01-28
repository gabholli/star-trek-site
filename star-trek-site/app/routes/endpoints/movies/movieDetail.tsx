import { useLoaderData } from "react-router"
import type { Route } from "../+types/endpoints"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const movieId = params.movieId
    const res = await fetch(
        `https://stapi.co/api/v1/rest/movie?uid=${movieId}`
    )
    return await res.json()
}

export default function EpisodeDetail() {
    const data = useLoaderData()
    console.log(data)
    return (
        <main className="flex flex-col justify-center items-center text-center
         gap-y-4">
            <h1 className="text-3xl font-bold text-blue-400">Details about {data.movie.title}:</h1>
            <div className="flex flex-col justify-center items-center gap-y-4 text-xl text-center">
                {data.movie.characters.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Characters: </h2>
                        {data.movie.characters && data.movie.characters?.map((character: any, index: number) => (
                            <h2
                                className="lg:self-end text-xl"
                                key={character.uid}>
                                {character.name}
                                {index < data.movie.characters.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
                {data.movie.directors.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Directors: </h2>
                        {data.movie.directors && data.movie.directors?.map((director: any, index: number) => (
                            <h2
                                className="lg:self-end text-xl"
                                key={director.uid}>
                                {director.name}
                                {index < data.movie.directors.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}

            </div>
        </main>
    )
}
