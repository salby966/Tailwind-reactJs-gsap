import "./Move.css";
import Newyork from '../images/new-york.webp';
import React from 'react';
import gsap from 'gsap';

const { useRef, useEffect} = React;

function Move(){
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to("#image", {
            x: 500,
            duration: 10,
            scrollTrigger: {
                trigger: "#image",
                markers: true,
                scrub: true,
                start: "top",
                end: "bottom 50px",
            }
        });
    },
    []);

    return (
        <div className="Move">
            <div>
                <img width="500px" height="500px" src={Newyork} />
            </div>
            <div>
                <img width="500px" height="500px" src={Newyork} />
            </div>
            <div ref={imageRef} id="image">
                <img width="500px" height="500px" src={Newyork} />
            </div>
        </div>
    );
}

export default Move;

// ReactDom.render( <Move />, document.getElementById("root"));