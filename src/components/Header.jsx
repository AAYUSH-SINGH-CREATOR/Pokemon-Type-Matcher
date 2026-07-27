import pokemonIcon from "../assets/pokemonicon.png";
import { FaTrophy } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Darkmode from "./Darkmode";



export default function Header() {

    const { score, dark } = useContext(AppContext);
    console.log(dark);

    return (
        <div className={`${dark ? "w-full fixed top-0 bg-gradient-to-r from-blue-950 to-slate-950 z-50" : "w-full bg-gradient-to-r from-blue-600 to-indigo-400 fixed top-0 z-50"}`}>
            <header className="flex justify-around">
                <div className="flex">
                    <div className="h-10 w-12 lg:h-12 m-2">  <img src={pokemonIcon} alt="icon" className="w-full h-full rounded-full object-fit " /> </div>
                    <div className="m-2">
                        <p>
                            <span className="text-md lg:text-xl font-bold text-amber-300">Pokemon </span>
                            <span className="text-md lg:text-xl font-bold text-white">Type Matcher</span>
                        </p>
                        <p className="text-gray-300 text-xs">Guess the primery type of the pokemon</p>
                    </div>
                </div>
                <Darkmode />
                <div className="flex m-3 bg-blue-900 lg:w-30 justify-center rounded-lg ">
                    <div className="h-full w-10 flex items-center justify-center">
                        <FaTrophy className="text-3xl lg:text-4xl text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]" />
                    </div>
                    <p className="flex flex-col ml-3 justify-center items-center"><span className="font-bold text-white ">Score</span>
                        <span className="text-white text-md lg:text-xl font-bold text-center">{score}</span>
                    </p>
                </div>
            </header>
        </div>
    )
}