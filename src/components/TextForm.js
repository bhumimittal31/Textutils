import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase!" , "success");
    };

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase!" , "success");
    };

    const handleclClick = () => {
        setText('');
        props.showAlert("Text Cleared!" , "success");
    };

    const handlecopyClick = () => {
        var copyText = document.getElementById('text');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to Clipboard!" , "success");
    };

    let speaking = false;
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    const handleLIClick = () => {
        utterance.text = text;

        if (!speaking) {
            synth.speak(utterance);
            speaking = true;
        } else if (synth.paused) {
            synth.resume();
            speaking = true;
        } else {
            synth.pause();
            speaking = false;
        }

        utterance.onend = () => {
            speaking = false;
        };
    };

    const handleOnchange = (event) => {
        setText(event.target.value);
    };


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#03204b' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#03204b' : 'white', color: props.mode === 'dark' ? 'white' : '#03204b' }} id="text" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Change to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Change to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleclClick}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlecopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLIClick}>Listen the text</button>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#03204b' : 'white', color: props.mode === 'dark' ? 'white' : '#03204b' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
            </div>
        </>
    );
}
