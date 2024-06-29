import { CInput } from "@coreui/react";
import React from "react";
const HomePrime=(props)=>{
    let {age,saveClick,phoneChange,phone,username,nameChange} = props;
    return(
        <>
        <h1>This is HomePrime </h1>   
        <p>welcome {username}</p>
        <p>Age~{age}</p>
        <p>Phone No.{phone}</p>
        <button onClick={saveClick}  className="btn btn-success mb-2">Save</button>

        <CInput type="text" placeholder="Please fill name"
        onChange={phoneChange} value={phone}/>
        <p>Your Phone is {phone}</p>
        
        <CInput type="text" placeholder="Please fill your Name"
        onChange={nameChange} value={username}/>
        <p>Your name is {username}</p>
       </>
    )
}

export default HomePrime;