import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("UpperCase Button was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    
    const handleLoClick =()=>{
        // console.log("UpperCase Button was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClClick =()=>{
        // console.log("UpperCase Button was clicked" + text)
        let newText = ''
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleEmClick =()=>{
        // console.log("UpperCase Button was clicked" + text)
        let emailRegex = /[\w-]+@[\w-]+\.[\w-]+/;
        let newText = text.match(emailRegex)[0];;
        setText(newText)
        props.showAlert("Email Extracted", "success")
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text", "success")
    }

    const handleEspace =()=>{
        let  newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Space", "success")
    }

    const handleOnChange =(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

 
    const [text, setText] = useState("Enter your text here");

    // const countParagraphs = text => text.split("\n").length;

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'#042743'}}  rows="8" ></textarea>
        </div>
        <button className={`btn btn-${props.mode} mx-1`}  onClick={handleUpClick}>Text Conversion to UpperCase</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleLoClick}>Text Conversion to LowerCase</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleEmClick}>Email Extractor</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleEspace}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleClClick}>Text Clear</button>
    </div>
    <div className="container my-4" style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>Word and Characters Counter</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters and {text.split(" ").length - 1} Spaces. {text.split(/[.?!]+/).length - 1} Sentence.</p>
        <p>{0.008 * text.split(" ").length} Minutes to read this text</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Please Enter Your Text in Above Text Box to Preview."}</p>

    </div>
    </>
  )
}
