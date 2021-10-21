import React from 'react';
import gsap from 'gsap';
import './BreakContent.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

class BreakContent extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.set('.content:not(.initial)', { autoAlpha: 0 })
        var headlines = gsap.utils.toArray(".text");

        var totalDuration = 1000;
        var singleDuration = totalDuration / headlines.length;
        const lineTimeline = gsap.timeline();

        ScrollTrigger.create({    
        trigger: ".pin-up",
        start: "top top",
        end: "+=" + totalDuration,
        //markers: true,
        pin: true,
        scrub: true,
        animation: lineTimeline,
        });

        lineTimeline
        .to('.sideline', { duration: 1 }, 0)
        .to('.sideline', { duration: 0.9, scaleY: 1, ease: "none" }, 0)


        headlines.forEach((elem, i) => {    
        
        const smallTimeline = gsap.timeline(); 
        const content = document.querySelector('.content-wrap');
        const relevantContent = content.querySelector('span.content-' + i);  
            
        ScrollTrigger.create({    
            trigger: ".wrapper", 
            start: "top -=" + ( singleDuration * i ),
            end: "+=" + singleDuration,
            //markers: true,
            animation: smallTimeline,
            toggleActions: relevantContent.classList.contains('remaining') ? "play none play reverse" : "play reverse play reverse",
            
        });   

        smallTimeline 
            .to(elem,{ duration: 0.25, color: "orange", scale: 1.25, ease: 'none' }, 0) 
            .set(relevantContent,{ autoAlpha: 1 }, 0.125)
        ;
        
        });

        var showYowza = gsap.timeline()
            showYowza.to('.below span', { autoAlpha: 1, y: 0 })

        ScrollTrigger.create({    
            trigger: ".below",
            start: "top center",
            //endTrigger: ".footer",
            end: "bottom bottom",
            //scrub: 1,
            //markers: true,
            animation: showYowza,

            toggleActions: "none play none reverse"
            //toggleActions: "play reverse play reverse"
        });
        
    }

    render(){
        return(
            <div>

                <div className="wrapper">
                <div className="pin-up">
                
                <div className="content-wrap">
                    <span className="content content-0 initial">
                        <img src="satu.png" alt="jjj"></img>
                    </span>
                    <span className="content content-1">
                        <img src="dua.png" alt="jjj"></img>
                    </span>
                    <span className="content content-2">
                        <img src="tiga.png" alt="jjj"></img>
                    </span>
                    <span className="content content-3">
                        <img src="empat.png" alt="jjj"></img>
                    </span>
                    <span className="content content-4 remaining">
                        <img src="lima.png" alt="jjj"></img>
                    </span>
                </div>  
                
                    <div className="sideline"></div>
                
                <div className="text-wrap">
                    <div className="text">Satu</div>
                    <div className="text">Dua</div>
                    <div className="text">Tiga</div>
                    <div className="text">Empat</div>
                    <div className="text">Awesomeness</div>  
                </div>
                
                </div>
                </div>
            </div>
        );
    }
}

export default BreakContent;