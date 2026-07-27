import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";




export default function Darkmode() {

    const { dark, setdark } = useContext(AppContext);

    // console.log(dark);

    function darkHandler() {
        dark ? setdark(false) : setdark(true);
    }

    return (
        <div className=" text-black flex justify-center items-center">
            <button className={`${dark ? "text-indigo-800 text-3xl" : "text-3xl text-amber-100"}`} onClick={darkHandler}>
                {
                    dark ? <IoSunnySharp /> : <MdOutlineDarkMode />
                }
            </button>
        </div>
    )
}
