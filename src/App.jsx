import { useState } from "react";
import { Background } from "./Components/Background/Background";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import './App.css';
function App() {
  
  let heroData=[
    {text1:"Experience performance " , text2:"engineered for the bold"},
    {text1:"Drive with confidence" , text2:"backed by cutting-edge safety"},
    {text1:"Find your perfect ride" , text2:"crafted for comfort"}
  ]

  const [heroCount,setHeroCount]=useState(0)
  const [playVideo,setPlayVideo]=useState(false)
  
    return(
      <>
       <div className="app-wrapper">
          <Background playVideo={playVideo} heroCount={heroCount}/>
          <Navbar/>
          <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playVideo={playVideo} setPlayVideo={setPlayVideo} />
       </div>
       
      </>
    )

}

export default App
