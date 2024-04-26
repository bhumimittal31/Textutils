import React from 'react'

export default function About(props) {
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item"  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze you text
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils gives you a way to Analyze your text quickly and efficiently. Be it word count, character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item"  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils is a free character counter tool that provides instant character count statistics for a given test. Textutils reports the number of word and characters. Thus it suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item"  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser compatible
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document , pdf document, essay, etc.
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}
