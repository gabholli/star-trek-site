import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
    layout("routes/layouts/homeLayout.tsx", [
        index("routes/home.tsx"),
    ]),
    layout("routes/layouts/layout.tsx", [
        route("endpoints", "routes/endpoints/endpoints.tsx"),
        route("books", "routes/endpoints/books/books.tsx"),
        route("books/:bookId", "routes/endpoints/books/bookDetail.tsx"),
        route("episodes", "routes/endpoints/episodes/episodes.tsx")
    ]),

] satisfies RouteConfig
