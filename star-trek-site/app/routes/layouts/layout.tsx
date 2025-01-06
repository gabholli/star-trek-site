import { Link, Outlet, useNavigate } from 'react-router'

export default function Layout() {
    const navigate = useNavigate()

    function goToPrevious(event: { preventDefault: () => void }) {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <div className='bg-stars bg-cover bg-center flex flex-col bg-slate-800 text-white min-h-dvh'>
            <nav className='flex justify-center py-4 border-b-2 border-white'>
                <div className="flex text-xl gap-x-8">
                    <Link
                        to="/"
                        className='lg:hover:underline'
                    >
                        Home
                    </Link>
                    <Link
                        to="/#"
                        onClick={goToPrevious}
                        className="lg:hover:underline"
                    >Go back
                    </Link>
                </div>
            </nav>
            <main className='flex-1 p-4 flex justify-center items-center'>
                <Outlet />
            </main>
        </div>
    )
}