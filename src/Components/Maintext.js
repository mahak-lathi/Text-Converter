import React, { useState } from 'react'


export default function Maintext(props) {
  const handleUpClick = ()=> {
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Uppercase", "success");
  }

  const handleLoClick = ()=> {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase", "success");
  }

  const handleOnChange = (event)=> {
    console.log("On change");
    setText(event.target.value)
  }
   const  [text , setText] = useState('');
  return (
    <>
    <div className = "container" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
<h3>{props.heading}</h3>
  <div className="form-floating">
  <textarea className="form-control" value={text} id="myBox" style={{backgroundColor:props.mode==='light'?'grey':'white' , color: props.mode === 'dark'? 'white': 'black'}}  onChange={handleOnChange} ></textarea>
  </div>
  <button className= "btn btn-primary my-3"  onClick= {handleUpClick}>Convert to Uppercase</button>
 <button className= "btn btn-primary my-3 mx-3"  onClick= {handleLoClick}>Convert to Lowercase</button>
  
</div>
<div className="comtainer my-3" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
  <h2>Your Text summary</h2>
  <h6>{text.split(" ").length } Words and {text.length} Charactors</h6>

</div>
  </>
  )
 
}
