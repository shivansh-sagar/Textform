
import React, { useState } from 'react'
import "../style/cube.css"

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "grey",
    backgroundColor: "white"
  })
  const [btnText, setBtnText] = useState("Enable Dark Mode")


  const toggleStyle = ()=>{
    if (myStyle.color === 'grey') {
      setMyStyle({
        color: "white",
        backgroundColor: "#042743"
      })
      setBtnText("Enable Light Mode")
    }
    else {
      setMyStyle({
        color: "grey",
        backgroundColor: "white"

      })
      setBtnText("Enable Dark Mode")

    }
  }

    return (
    <>
      <div className='container body__main rounded-2 mt-3' style={myStyle}>
        <h1>Feature</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Two different modes</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
               <p> <strong>1.</strong>First dark mode button is at the <code>.NavBar</code> section,through which you can change the upper TextForm section mode of the website.</p>
                <p><strong>2.</strong>Second dark mode button works only for the feature section of the website.
                That helps me to understand the concept of <code>useState</code> and <code>useEffect</code> hooks.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Convert to UpperCase
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>1.</strong> This button provide the user to convert all of his text into upper case <code>.toUpperCase();</code>, 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Convert to LowerCase
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>1.</strong> This button provide the functionality to convert all the text given by the user to the lowercase <code>.tolowerCase();</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3" onClick={toggleStyle} ><button className='btn btn-primary'>{btnText}</button></div>
      </div>
      
      {/* <div className="body">
        <div className="container container3">
            <div className="cube">
                <div className="face front" ></div>
                <div className="face right"></div>
                <div className="face back"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    </div> */}
      
      </>
    )
  }

