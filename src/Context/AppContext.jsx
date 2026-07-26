import { Children, createContext, useContext, useState } from "react";
import { baseURL } from "../BaseUrl";
import axios from "axios";
import Spinner from "../components/Spinner";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [loading,setLoading] = useState(true);
    const [ranid, setRanid] = useState("25");
    const [score ,setscore] = useState(0);
    const [round, setround] = useState(0);


    async function fetchPoke(ranid){
      setLoading(true);
        try{
            let URL = `${baseURL}/${ranid}`;
            let response = await axios.get(URL);
            await new Promise((resolve) => setTimeout(resolve, 200));
            setImage(response.data.sprites.other["official-artwork"].front_shiny);
            setType(response.data.types[0].type.name);
            setName(response.data.name);
            setround(round+1);
        }

        catch(error){
             console.log("error aa gya");
        }
        setLoading(false);
    }
    
    function randomPoke(){
        let random = Math.floor(Math.random()*1025)+1;
        setRanid(random);
        fetchPoke(ranid);
    }


    const value ={
        image,
        setImage,
        name,
        setName,
        type,
        setType,
        ranid,
        setRanid,
        score,
        setscore,
        loading,
        setLoading,
        round, 
        setround,
        fetchPoke,
        randomPoke
    }

    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}