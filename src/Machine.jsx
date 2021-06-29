import React, {useEffect} from 'react';
import './App.scss'
import {FaTumblr, FaTwitter} from 'react-icons/fa';
import {VscQuote} from "react-icons/all";



const Machine = (props) => {

let text=props.randomReducer.data[props.randomReducer.index].text;
let author=props.randomReducer.data[props.randomReducer.index].author;
let style=props.randomReducer.style[props.randomReducer.index];
let styleColor={color:style,
                transition:'color 0.5s linear'
};
let styleBackground={backgroundColor:style, transition:'backgroundColor 0.5s linear'};



   const rand=()=>{
        let indexRandom=Math.floor(Math.random()*12);
        props.randomFunction(indexRandom)
    }

    useEffect(() => {
        document.body.style.backgroundColor = style;
    });

    return (
        <>
        <div id='quote-box' >
            <div id='text'>
                <VscQuote  style={styleColor}/>
                <span className='text'  style={styleColor}>{text}</span>
            </div>
            <div id="author">
                <span className='author' style={styleColor}>{author}</span>
            </div>
            <div className='buttons'>
                <a
                    style={{backgroundColor:style}}
                    className='button'
                    href="#"
                    id="tweet-quote">
                    <FaTwitter/>
                </a>
                <a
                    style={styleBackground}
                    className='button'
                    href="#"
                    id="tumblr-quote">
                    <FaTumblr/>
                </a>
                <button
                    style={styleBackground}
                    onClick={rand}
                    className='button'
                    id="new-quote">new-quote</button>
            </div>
        </div>
    <div className='footer'>
        <a href="">
            <span id='footer'>by hezag</span>
        </a>
    </div>
        </>
    );
};

export default Machine;
