import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Context/AppContext"
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


export default function App() {

  const { dark } = useContext(AppContext);

  return (
    <div className={`${dark ? "bg-gradient-to-r from-slate-950 to-black" : ""} `}>
      <Header className="w-9/12" />
      <Card />
      <Footer />
    </div>
  )
} 