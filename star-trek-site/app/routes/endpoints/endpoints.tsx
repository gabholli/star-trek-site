import { Link } from "react-router";

export default function Endpoints() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <div className="text-3xl font-bold">
        <h1>Select a category:</h1>
      </div>
      <main className="text-2xl flex flex-col justify-center items-center gap-y-4">
        <Link
          className=" lg:hover:underline"
          to="/books"
        >
          Books
        </Link>
        <Link
          className=" lg:hover:underline"
          to="/episodes"
        >
          Episodes
        </Link>
        <Link
          className=" lg:hover:underline"
          to="/movies"
        >
          Movies
        </Link>
      </main>
    </div>
  )
}
