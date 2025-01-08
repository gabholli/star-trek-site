import { Outlet } from 'react-router'

export default function HomeLayout() {
    return (
        <div className='font-lato bg-stars bg-cover bg-center flex flex-col bg-slate-800 text-white min-h-dvh'>
            <main className='flex-1 p-4 flex justify-center items-center'>
                <Outlet />
            </main>
        </div>
    )
}