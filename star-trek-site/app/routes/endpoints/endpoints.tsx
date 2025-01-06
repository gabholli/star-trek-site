import { Link } from "react-router";

export default function Endpoints() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <div className="text-3xl">
        <h1>Select a category:</h1>
      </div>
      <main className="text-2xl flex flex-col justify-center items-center">
        <Link to="/books">Books</Link>
      </main>
    </div>
  )
}
