import { useContext, useEffect, useState } from "react";
import pokeIcon from "../assets/pokemonicon.png"
import { FaChevronRight } from "react-icons/fa6"
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { FaRegCircleQuestion } from "react-icons/fa6";



export default function Card(){

    const {image, type, ranid, randomPoke, name, round, score, setscore, loading, setLoading} = useContext(AppContext);

    const [message, setmessage] = useState("Select an option to see the result")
    const [answered, setAnswered] = useState(false);
    
    const correctType = type;

    useEffect(()=>{
        randomPoke()
    },[])

    const allTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const reaminType = allTypes.filter((typee)=>{
    return typee!==correctType
})

 reaminType.sort(()=>Math.random() - 0.5);

const wrongOption = reaminType.slice(0,3);

const options = [...wrongOption, correctType];

options.sort(()=> Math.random() - 0.5);

function optionHandler(type){
    if(answered == true) return;

    setAnswered(true);

   if(type === correctType){
    setmessage(`🎉Correct, ${name} is ${correctType} pokeee`);
    setscore(score+4);
}
else{
    setmessage(`💀incorrect, ${name} is ${correctType} pokeee`);
    setscore(score-1);
}


}

function nextPokebtn(){
    if(answered==true){
    setmessage("Select an option to see the result")
    randomPoke();
    setAnswered(false);
}
    
}

    return(
        <div className="flex justify-center mt-25 p-2">
        <div className="w-11/12 lg:w-7/12 shadow-2xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] rounded-lg p-5 flex flex-col items-center">
            <div className="flex bg-blue-400/40 p-2 rounded-lg w-35">
                <img src={pokeIcon} alt="ICon" className="h-7 w-7 rounded-full mr-2" />
                <p className="font-bold text-indigo-500">Round: {round}</p>
            </div>

            <div className="mt-3">
                <h1 className="font-bold text-xl text-gray-700 text-center">What is this pokemon's type?</h1>
                <p className="text-gray-600 ">Choose the correct primary type from the options below</p>
            </div>

            <div className="w-10/12 flex justify-center min-h-50 shadow-2xl shadow-[0_10px_25px_rgba(0,0,0,0.16)] bg-blue-400/10 border-gray-500 mt-3 md-4 rounded-3xl">
                {

                loading ? (<Spinner /> ) :   ( <img src={image} alt="bruhhhh" /> )
                
                }
            </div>

            <div className="options grid grid-cols-2 gap-3 m-5">{
                options.map((type)=>(
                     <button key={type} className="border  lg:p-1 rounded-md w-20 lg:w-40 " onClick={() => optionHandler(type)}>
                        {type}
                     </button>
                ))}

            </div>

            <div className="text-xs lg:text-lg border border-dotted w-10/12 flex justify-center items-center text-gray-500 h-10 rounded-md border-gray-700 ">
                <p className="flex justify-center items-center gap-1"><FaRegCircleQuestion/>{message}</p>
            </div>

            <div className="mt-7">
                <button onClick={nextPokebtn} className="w-55 bg-blue-500/85 text-amber-50 lg:w-70 rounded-4xl p-2 flex items-center justify-center gap-2">
                <span>Next Pokemon</span> <span><FaChevronRight /> </span></button> 
            </div> 
        </div>
        </div>
    )
}