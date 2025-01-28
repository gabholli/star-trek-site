import { useLoaderData } from "react-router"
import type { Route } from "../+types/endpoints"

export async function clientLoader({ params }: Route.LoaderArgs) {
    const episodeId = params.episodeId
    const res = await fetch(
        `https://stapi.co/api/v1/rest/episode?uid=${episodeId}`
    )
    return await res.json()
}

export default function EpisodeDetail() {
    const data = useLoaderData()
    console.log(data)
    return (
        <main className="flex flex-col justify-center items-center text-center
         gap-y-4">
            <h1 className="text-3xl font-bold text-blue-400">Details about {data.episode.title}:</h1>
            <div className="flex flex-col justify-center items-center gap-y-4 text-xl text-center">
                {data.episode.characters.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Characters: </h2>
                        {data.episode.characters && data.episode.characters?.map((character: any, index: number) => (
                            <h2
                                className="lg:self-end text-xl"
                                key={character.uid}>
                                {character.name}
                                {index < data.episode.characters.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
                {data.episode.directors.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Directors: </h2>
                        {data.episode.directors && data.episode.directors?.map((director: any, index: number) => (
                            <h2
                                className="lg:self-end text-xl"
                                key={director.uid}>
                                {director.name}
                                {index < data.episode.directors.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
                {data.episode.season.numberOfEpisodes &&
                    <h2><span className="text-2xl">Episode number: </span>{data.episode.season.numberOfEpisodes}</h2>
                }
                {data.episode.season.seasonNumber &&
                    <h2><span className="text-2xl">Season number: </span>{data.episode.season.seasonNumber}</h2>
                }
                {data.episode.season.series.title &&
                    <h2><span className="text-2xl">Show: </span>{data.episode.season.series.title}</h2>
                }
                {data.episode.usAirDate &&
                    <h2><span className="text-2xl">Air date: </span>{data.episode.usAirDate}</h2>
                }
                {data.episode.writers.length > 0 && (
                    <div className="flex flex-col lg:flex-row lg:w-96 justify-center items-center gap-2 flex-wrap">
                        <h2 className="text-2xl">Writers: </h2>
                        {data.episode.writers && data.episode.writers?.map((writer: any, index: number) => (
                            <h2
                                className="lg:self-end text-xl"
                                key={writer.uid}>
                                {writer.name}
                                {index < data.episode.writers.length - 1 && ","}</h2>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
