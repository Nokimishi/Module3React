import React, { useState } from "react";
import HomePrime from "./homePrime";

const Home=()=>{
  const[username, setName]=useState("");
  const[phone, setPhone]=useState("");

  const saveClick =()=>{
    alert("save Clicked")
  }
  
  const phoneChange =(e)=>{
    setPhone(e.target.value);
  }

  const nameChange =(e)=>{
    setName(e.target.value);
  }

  return(
    <>
    <h1>Hello World</h1>    
    <HomePrime 
    username={username} 
    age="20 year old" 
    saveClick={saveClick} 
    phone={phone} 
    phoneChange={phoneChange}
    nameChange={nameChange}/>
   </> 
  )
}

export default Home;