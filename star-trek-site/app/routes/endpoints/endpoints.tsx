import { Link } from "react-router";

export default function Endpoints() {
  return (
    <div>
      <div>
        <h1>Select a cetegory:</h1>
      </div>
      <nav>
        <Link to="/books">Books</Link>
      </nav>
    </div>
  )
}
