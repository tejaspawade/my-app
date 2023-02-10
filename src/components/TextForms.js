import React, { useState } from 'react'

export default function TextForms(props) {
  const handleUpclick=()=>{
    console.log("Button was click")
    let newText=text.toUpperCase()
    setText(newText)
  }
  const handleLoclick=()=>{
    console.log("Button was click")
    let newText=text.toLowerCase()
    setText(newText)
  }
  const handleOnchange=(event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  const [text,setText]=useState("Enter text here")
  return (
    <>
    <div className="container">      
    <div className="form-group">
        <label htmlFor="Textbox1">{props.TB1}</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="Textbox1" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoclick}>Lowercase</button>
    </div>
    
    <div className="container my-3">
       <h1> Your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    <div className="alert alert-warning"  role="alert">
  Check this out <a href="https://google.com" className="alert-link">Google</a>. Give it a click if you like.
</div>
    </>
  )
}
