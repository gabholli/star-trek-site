import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"
import Endpoints from "./routes/endpoints/endpoints"

export default [
    layout("routes/layouts/homeLayout.tsx", [
        index("routes/home.tsx"),
    ]),
    layout("routes/layouts/layout.tsx", [
        route("endpoints", "routes/endpoints/endpoints.tsx"),
        route("books", "routes/endpoints/books/books.tsx"),
        route("books/:bookId", "routes/endpoints/books/bookDetail.tsx")
    ]),

] satisfies RouteConfig
