import React, { useState } from "react";
import classes from "./Button.module.css"
import Modal from "./Modals";



const Button=(props)=>{
    const[ispressed,setispressed]=useState(false)
    const modalhandler=(props)=>{
        setispressed(true)
    
    }
    const hide=(props)=>{
        setispressed(false)

    }

    
    return(
    <div >
        <button onClick={modalhandler} className={classes.style} value={props.value}>CREATE YOUR OWN</button>
        {ispressed && <Modal change={props.change} onClick={hide}/>}
    </div>)
}
export default Button