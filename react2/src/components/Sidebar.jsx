import { Star, CheckBoxRounded, Check } from "@mui/icons-material"
function SideBar() {
    return (
        <nav className="flex flex-col items-start w-50 gap-2 bg-[#0D142f]">
            <button className="flex justify-center items-center gap-4 w-full cursor-pointer text-white">
                <section>
                    <CheckBoxRounded/>
                    Todas
                </section>
            </button>
            <button className="flex justify-center items-center gap-4 w-full cursor-pointer text-white">
                <section>
                    <Check/>
                    Completas
                </section>
            </button>
            <button className="flex justify-center items-center gap-4 w-full cursor-pointer text-white">
                <section>
                    <Star/>
                    Favoritas
                </section>
            </button>
        </nav>
    )
}

export default SideBar;