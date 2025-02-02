import { useNavigate } from "react-router"

export default function Paginate({ totalPages, pageNumber, pageSize, pageGroup, setPageGroup }: Paginta) {
    const navigate = useNavigate()

    function handlePageChange(page: any) {
        navigate(`?pageNumber=${page}&pageSize=${pageSize}`)
    }

    function handleNextGroup() {
        if ((pageGroup + 1) * 10 < totalPages) {
            setPageGroup(pageGroup + 1)
        }
    }

    function handlePreviousGroup() {
        setPageGroup(Math.max(pageGroup - 1, 0))
    }

    const startPage = pageGroup * 10 + 1
    const endPage = Math.min(startPage + 9, totalPages)

    const pageButtons = []

    for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className="lg:hover:underline"
            >
                {i}
            </button>

        )
    }

    return (<div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex gap-x-4"> {pageGroup > 0 && (
            <button
                onClick={handlePreviousGroup}
                className="lg:hover:underline"
            >
                {"<<<"}
            </button>)
        } {pageGroup < Math.ceil(totalPages / 10) - 1 && (
            <button
                onClick={handleNextGroup}
                className="lg:hover:underline"
            >
                {">>>"}
            </button>)
            } </div>
        <div
            className="flex flex-wrap gap-4 justify-center"
        >
            {pageButtons}
        </div>
    </div>)
}