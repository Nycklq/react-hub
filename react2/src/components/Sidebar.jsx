function SideBar() {
    return (
        <nav className="flex flex-col items-start gap-2 m-10">
            <button className="bg-black text-white">Todas</button>
            <button>Completas</button>
            <button>Favoritas</button>
        </nav>
    )
}

export default SideBar;