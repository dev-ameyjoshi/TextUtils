import React,{useState} from 'react'


export default function TextForm(props) {
      
      const handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to upper case","success");
      }
      const handleLowClick = () =>{
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to lower case","success");
      }
      const handleClearClick = () =>{
            let newText = "";
            setText(newText)
            props.showAlert("Cleared text","success");   
      }
      const handleCopy = () =>{
            navigator.clipboard.writeText(text);
            props.showAlert("Copied  To Clipboard! ","success");
      }
      const handleExtraSpaces = () =>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Removed extra spaces","success");
      }
      
      const handleOnChange = (event) => {
            setText(event.target.value);
      }
      const [text,setText] = useState('');
      
      return (
            <>
            <div className = "container"  style ={{color:props.mode==='dark' ? 'white':'#042743'}}>
            <h2 className = "mb-2">{props.heading}  </h2>
              <div className="mb-3">
              
              <textarea className="form-control"  value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark' ? '#13466e':'white',color:props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
             
              </div>  
              <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
              
              <button disabled = {text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
              <button disabled = {text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
              <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
              <button disabled = {text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              
            </div>
            <div className="container my-3" style ={{color:props.mode==='dark' ? 'white':'#042743'}}>
                  <h1>Your Text summary</h1>
                  <p>{text.split(/\s+/ ).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                  <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
                  <h2>Preview</h2>
                  <p>{text.length>0?text:"Nothing to preview!"}</p>
                  
            </div>
            </>
      )
}
