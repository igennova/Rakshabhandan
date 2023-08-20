import React, { Fragment, useState } from "react";
import classes from "./Modal.module.css"
const Backdrop=(props)=>{ return(
    <div className={classes.backdrop} onClick={props.onclose}></div>)
}
const Modaloverlays=(props)=>{
    const[showerror,setshowerror]=useState(false)
    const[name,setname]=useState("")
    
    const changehandler=(event)=>{
        setname(event.target.value.toUpperCase())
    }
    if (name.length>17){
        setshowerror(true)
       
    }
   const namechanger=()=>{
    let newName;
    
    props.onChange(name)
    var parts = window.location.href.split("ref#");
    newName = parts[0] + "ref#" + name
        console.log(newName)

   }
   
   
    return(<Fragment>
    <div className={classes.modal}>
    <p> ENTER YOUR NAME</p>
    
    <input type="text" onChange={changehandler}></input>
    {showerror&&<p>The Name Should be Smaller than 17 Characters</p>}
    <button className={classes.button} onClick={namechanger}>Copy Link</button>
    {/* <button></button> */}
    </div>
   
    </Fragment>
    )
}
const Modal=(props)=>{
    return(<Fragment>
        <Backdrop onclose={props.onClick}/>
        <Modaloverlays onChange={props.change}>{props.children}</Modaloverlays>
    </Fragment>
    )
   


}
export default Modal