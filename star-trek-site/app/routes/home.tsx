import { Link } from "react-router";
import type { Route } from "./+types/home"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-16">
      <h1 className="text-3xl text-center font-bold">Let's find out more about Star Trek!</h1>
      <nav className="text-2xl grid grid-cols-1 place-items-center gap-y-16">
        <Link
          className="lg:hover:underline"
          to="endpoints"
        >
          List of categories
        </Link>
      </nav>
    </div>
  )
}