import React from 'react';
import { gsap }  from 'gsap';
import './Half.css';
import Scrollbar from 'smooth-scrollbar';
import ScrollTrigger from 'gsap/ScrollTrigger';

class Half extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        let bodyScrollBar = Scrollbar.init(document.body, {
          damping: 0.1,
          delegateTo: document,
        });
        ScrollTrigger.scrollerProxy(".scroller", {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          },
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
        gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
        
        var images = gsap.utils.toArray('.panel:not(.purple)');
        
        images.forEach((image, i) => {
          
          var tl = gsap.timeline({
            
            scrollTrigger: {
              trigger: "section.black",
              scroller: ".scroller",
              start: () => "top -" + (window.innerHeight*(i+0.5)),
              end: () => "+=" + window.innerHeight,
              scrub: true,
              toggleActions: "play none reverse none",
              invalidateOnRefresh: true,     
            }
            
          })
          
          tl
          .to(image, { height: 0 })
          ;
          
        });
        
        gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
        
        var texts = gsap.utils.toArray('.panel-text');
        
        texts.forEach((text, i) => {
          
          var tl = gsap.timeline({
            
            scrollTrigger: {
              trigger: "section.black",
              scroller: ".scroller",
              start: () => "top -" + (window.innerHeight*i),
              end: () => "+=" + window.innerHeight,
              scrub: true,
              toggleActions: "play none reverse none",
              invalidateOnRefresh: true,     
            }
            
          })
          
          tl
          .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
          .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
          ;
          
        });

        ScrollTrigger.create({

            trigger: "section.black",
            scroller: ".scroller",
            scrub: true,
            // markers: true,
            pin: true,
            start: () => "top top",
            end: () => "+=" + ((images.length + 1) * window.innerHeight),
            invalidateOnRefresh: true,
        
        });
    }

    render(){
        return(
                <div className="scroller">
                <section className="black">
                    <div className="text-wrap">          
                        <div className="panel-text">
                        <img src="./analisis.svg" width="450px" height="450px"></img>
                        </div> 
                        <div className="panel-text red-text">
                        <img src="./kontak.svg" width="450px" height="450px"></img>
                        </div>   
                        <div className="panel-text orange-text">
                        <img src="./repair.svg" width="450px" height="450px"></img>
                        </div> 
                        <div className="panel-text purple-text">
                        <img src="./logistik.svg" width="450px" height="450px"></img>
                        </div> 
                    </div>
                    <div className="p-wrap">
                        <div className="panel blue">
                            <img className="panel blue" src="./analisis.svg" width="full" height="full"></img>
                        </div>
                        <div className="panel red">
                        </div>
                        <div className="panel orange">
                        </div> 
                        <div className="panel purple">
                        </div> 
                    </div>
                </section>
            </div>
        );
    }
}
export default Half;