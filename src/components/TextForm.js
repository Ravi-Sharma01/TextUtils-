import React, {useState} from 'react'

// import PropTypes from 'prop-types'


export default function TextForm(props) {
    //remove extra space 
    const handleExtraSpace=()=>{
       let result = "";
       let inWord = false;
       for(let i=0; i<text.length; i++){
         const char = text[i];
         if(char !== " "){
            result += char;
            inWord = true;
         }else if(inWord){
            result += " ";
            inWord = false;
         }
       }
       //remove the traling space
       if(result[result.length-1] === " "){
        result =result.slice(0, -1);
       }
        setText(result);
        props.showAlert("Extra spaces removed succesfully", "success");
    }
    // copy text function
    const handleCopyText=()=>{
        var copyText = document.getElementById('myBox');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
       
        props.showAlert("Copy to ClipBoard succesfully", "success");
    }
    //clear text function
    const handleclearText=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleard succesfully", "success");
    }
    // a function to change lowercase
    const handleLoerCase =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted in Lowercase succesfully", "success");
    }

    //a function to change upper case
    const handleUpperCase =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted in Uppercase succesfully", "success");
    }

    //a function to onchnage or to give input n textarea
    const handleOnChnage = (event)=>{
        setText(event.target.value)
    }

    // hooks usestate / wtihout use  classes
    const[text, setText] = useState("Enter text here!");

    //jsx start here
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'White':'black'}}>
                <div className='my-3'>
                    <h3>{props.heading}</h3>
                    <div className="mb-3 my-3">
                        <textarea name="myBox"value={text} onChange={handleOnChnage} style={{color:props.mode === 'dark'?'white':'black',
                            backgroundColor:props.mode === 'dark'?'#01051e':'white'}} rows="8" id="myBox" className="form-control"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpperCase}>UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoerCase}>LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                
                </div>
            </div>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h3>your text summry</h3>
                <p>{text.length === 0?0:(text.split(" ")).length} words and {text.length} characters</p>
                <p>{(text.length=== 0?0:0.008 * text.split(" ").length)} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"enter some text to preview"}</p>
            </div>
        </>
    );
}




