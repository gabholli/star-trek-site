import { Link } from "react-router";

export default function Credits() {
    return (
        <section className='flex flex-col justify-center items-center gap-y-10 m-4 md:m-12'>
            <div className='flex flex-col justify-center items-center gap-y-10 bg-white
                p-6 md:p-12 rounded-3xl'>
                <h2 className='text-xl lg:text-5xl xl:text-4xl'>Credits</h2>
                <div className='flex flex-col justify-center items-center gap-y-10 text-center
                text-xl lg:text-3xl xl:text-3xl px-10'>
                    <p className=''>This project uses the STAPI(Star Trek API) for data from The
                        'Star Trek' universe.
                    </p>
                    <p>
                        This project is a fan-made demonstration using the STAPI. It
                        is not affiliated with or endorsed by the official Star Trek franchise.
                    </p>
                    <Link
                        className='underline text-xl lg:text-3xl xl:text-3xl'
                        to="https://stapi.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Original source
                    </Link>
                </div>
            </div>
        </section>

    )
}
