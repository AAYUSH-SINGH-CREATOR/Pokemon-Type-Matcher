import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Context/AppContext"
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


export default function App(){


  return(
    <div className="">
       <Header className="w-9/12"/>
      <Card  />
      <Footer />
    </div>
  )
} 