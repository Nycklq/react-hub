function SideBar() {
    return (
        <nav className="flex flex-col items-start gap-2 bg-[#0D142f]">
            <button className="w-full cursor-pointer text-white">Todas</button>
            <button className="w-full cursor-pointer text-white">Completas</button>
            <button className="w-full cursor-pointer text-white">Favoritas</button>
        </nav>
    )
}

export default SideBar;