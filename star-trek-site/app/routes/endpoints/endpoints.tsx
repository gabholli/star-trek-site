import { Link } from "react-router";

export default function Endpoints() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <div className="text-3xl font-bold text-blue-400">
        <h1>Select a category:</h1>
      </div>
      <main className="text-2xl flex flex-col justify-center items-center gap-y-10">
        <Link
          className=" lg:hover:underline border-black rounded-full border-2 py-2 px-4"
          to="/books"
        >
          Books
        </Link>
        <Link
          className=" lg:hover:underline border-black rounded-full border-2 py-2 px-4"
          to="/episodes"
        >
          Episodes
        </Link>
        <Link
          className=" lg:hover:underline border-black rounded-full border-2 py-2 px-4"
          to="/movies"
        >
          Movies
        </Link>
      </main>
    </div>
  )
}
