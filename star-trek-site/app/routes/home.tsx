import { Link } from "react-router";
import type { Route } from "./+types/home"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-16">
      <h1 className="text-2xl text-center font-bold">Find out more about Star Trek!</h1>
      <nav className="text-xl grid grid-cols-1 place-items-center gap-y-16">
        <Link to="endpoints">List of categories</Link>
      </nav>
    </div>
  )
}