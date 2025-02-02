export interface Book {
    uid: string
    title: string
}

export interface Episode {
    uid: string
    title: string
}

export interface Movie {
    uid: string
    title: string
}

export interface PaginateProps {
    totalPages: number
    pageNumber: number
    pageSize: number
    pageGroup: number
    setPageGroup: (pageGroup: number) => void
}