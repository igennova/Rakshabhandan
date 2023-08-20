import React, { Fragment, useState } from "react";
import classes from "./App.module.css";
import Rakhi from "./image.json";
import Lottie from "lottie-react";
import header from "./rakhi.json";
import Button from "./Button";

function App(props) {
  let url;

  url = window.location.href;
  console.log("==", url);
  let refferedBY;
  refferedBY = "LUCKY"
  var parts = url.split("ref#");
  if (parts.length > 1) {
    refferedBY = parts[1];
    console.log("Text after 'ref#':", refferedBY, parts);
  } else {
    console.log("'ref#' not found in URL.");
  }

  const [realname, setrealname] = useState(refferedBY.toUpperCase());
  const [vaild, setvalid] = useState(true);
  const [print, setprint] = useState(false);
  const[showerror,setshowerror]=useState(false)
  console.log("newName", refferedBY);


  const changehand = (name) => {
    if (name.length > 0) {
      setrealname(name);
      setprint(true);
    } 
    // else if(name.length>17){
    //   setshowerror(true)
    // }

    
    
    else {
      setprint(false);
    }

    console.log("newName", name);
    if (name.length > 5) {
      setvalid(false);
    } else {
      setvalid(true);
    }
  };

  const style = `${vaild ? classes.font1 : classes.font3}`;

  return (
    <Fragment>
      <div>
        <span className={style}>{print ? realname : refferedBY}</span>
        <div className={classes.fixed}>WISHES YOU</div>
      </div>

      <div className={classes.image}>
        <Lottie animationData={Rakhi} />
      </div>
      <div className={classes.image3}>
        <Lottie animationData={header} />
      </div>
      <div className={classes.image2}>
        <Lottie animationData={header} />
      </div>
      {setshowerror&&<Button onClick={props.onClick} change={changehand} />}

      {/* <form>
      <input type="text"></input>
      <div className={classes.button}><button></button></div>
    </form>
  
    */}
    </Fragment>
  );
}

export default App;
