import React from 'react';
import gsap from 'gsap';
import './Content.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

class Content extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            markers:false
          })
          
          var points = gsap.utils.toArray('.point');
          var indicators = gsap.utils.toArray('.indicator');
          
          var height = 100 * points.length;
          
          gsap.set('.indicators', {display: "flex"});
          
          var tl = gsap.timeline({
            duration: points.length,
            scrollTrigger: {
              trigger: ".philosophie",
              
              //start: "top center",
              //end: "+="+height+"%",
              
              start: "top bottom", 
              end: "+="+height+"%",
              
              scrub: true,
              id: "points",
            }
          })
          
          var pinner = gsap.timeline({
            scrollTrigger: {
              trigger: ".philosophie .wrapper",
              start: "center center",  // <-------
              
              //end: "+="+height+"%",
              end: "+=100%",
              
              scrub: true,
              pin: ".content",  // <-------
              //pinSpacing: true,
              id: "pinning",
              markers: true
            }
          })
          
          
          points.forEach(function(elem, i) {
            gsap.set(elem, {position: "absolute", top: 0});
          
            tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
            tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
            tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
            
            if (i != points.length-1) {
              tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
              tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
              tl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
            }
            
          });	
        
    }

    render(){
        return(
        <div className="content">
        <section className="philosophie">
        <div className="wrapper">
            
            <div className="point">
            <article>
                <h3 >Section 1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
            <img src="https://source.unsplash.com/random/500x500" alt="random"  width="500" height="500" />
            </div>

            <div className="point">
            <article>
                <h3>Section 2</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
            <img src="https://source.unsplash.com/random/510x500" alt="random"  width="500" height="500" />
            </div>

            <div className="point">
            <article>
                <h3 >Section 3</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
            <img src="https://source.unsplash.com/random/500x500" alt="random"  width="500" height="500" />
            </div>

            <div className="point">
            <article>
                <h3 >Section 4</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
            <img src="https://source.unsplash.com/random/500x500" alt="random"  width="500" height="500" />
            </div>
        </div>
        </section>
        </div>
                );
            }
        }

export default Content;