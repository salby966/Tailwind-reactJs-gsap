import React from 'react';
import './Scroll.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


class Scroll extends React.Component{
    componentDidMount(){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: ".sec01",
        start: "top top",
        end: "bottom center+=36",
        pin:'.center',
        toggleClass: {targets: ".center", className: "green"}
      });
      
      // all other sections =============
      
      var numbers = gsap.utils.toArray(".sec02").forEach(function(elem) {
        var num = elem.querySelector(".top");
        
        ScrollTrigger.create({
          trigger: elem,
          start: "top center-=34",
          end: "bottom center+=36px",
          pin: num,
          toggleClass: {targets: num, className: "green"}
        })
      });
      

    }

    render(){
        return(
            <div>
            <section className="sec01">
                <h1 className="center">01</h1>
                <div>
                    <p>jiorufmc78467bhanlsajsjajsn</p>
                </div>
            </section>

            <section className="sec02">
                <h1 className="top">02</h1>
            </section>

            <section className="sec02">
                <h1 className="top">03</h1>
            </section>

            <section className="sec02">
                <h1 className="top">04</h1>
            </section>

            <div className="marker"></div>
        </div>
        );
    }
}


export default Scroll;