import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    console.log(theme, "current theme");    
    return (
        <button className="btn btn-circle" onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
            {
                theme === "dark" ? (
                    <MdLightMode size={20} />
                ) : (
                    <MdDarkMode size={20} />
                )
            }
        </button>
    )
}