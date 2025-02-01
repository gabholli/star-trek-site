import { Link } from "react-router";
import type { Route } from "./+types/home"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-y-12 lg:gap-x-12">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl text-center font-bold">Welcome to Star Trek <span className="text-blue-400">Explorer!</span></h1>
        <nav className="text-2xl grid grid-cols-1 place-items-center gap-y-16">
          <Link
            className="lg:hover:underline border-black border-2 rounded-full px-4 py-2"
            to="endpoints"
          >
            List of categories
          </Link>
        </nav>
      </div>
      <img className="lg:size-1/2" src=" /stars3.png" />
    </div>
  )
}