import { Outlet } from 'react-router'

export default function HomeLayout() {
    return (
        <div className='flex flex-col bg-slate-800 text-white min-h-svh'>
            <main className='flex-1 p-4 flex justify-center items-center'>
                <Outlet />
            </main>
        </div>
    )
}