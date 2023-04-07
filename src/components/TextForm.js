import React, { useState } from 'react'
import "../style/text.css"


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.Showalert("Changed to Uppercase!","success")
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.Showalert("Changed to Lowercase!","success")
  }
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
    

  }
  const handleClear = () => {
    let newText = '';
    setText(newText)
    props.Showalert("Text is Cleared!","danger")
  }
  const handleCopy = () => {
    console.log('i am copying')
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState('');
  // setText("New text")

  let dark1 = 'text-black text-center';
  let light1 = 'text-white text-center';
  return (
    <>
    <div className='body1' style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' }}>
      <div className='container'>
        <h1 className={props.mode === 'dark' ? light1 : dark1}>{props.Heading}</h1>
        <div className="form-floating" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color:props.mode==='dark'?'white':'black' }}
            id="myBox" rows='4'></textarea>
        </div>
        <button className='btn btn-primary mt-3' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-secondary mt-3 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-success mt-3 mx-2' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-danger mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words  and {text.length} character </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      </div> 
      
      </div>
    </>
  )
}
