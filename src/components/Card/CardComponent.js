import React from 'react';
import './CardComponent.scss';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

class CardComponent extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(CSSRulePlugin);
        const div = document.querySelector(".card");
        const tl = gsap.timeline({ defaults: { duration: 0.9, stagger: 0.09 } });

        gsap.from(".card", { y: -500, duration: 0.7 });
        gsap.from(".card", { opacity: 0, duration: 0.5 }, "-=0.3");

        const cardBefore = CSSRulePlugin.getRule(".card::before");
        const cardAfter = CSSRulePlugin.getRule(".card::after");

        tl.paused(true);
        tl.to(cardAfter, { cssRule: { opacity: 0 } });
        tl.to(cardBefore, {
        cssRule: { clipPath: "circle(0%)", transformOrigin: "39px 50px" }
        });
        tl.from(".card__header, .card__content", { scale: 0.7, opacity: 0 }, "-=0.5");

        div.addEventListener("mouseover", function () {
        tl.play();
        });

        div.addEventListener("mouseout", function () {
        tl.reverse();
        });

    }

    render(){
        return(
            <div className="card">
            <div className="card__header">
                <h2>Layanan</h2>
                <data>May 05 2021</data>
            </div>
            <div className="card__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.quas temporibus maiores fugit distinctio cum recusandae, nemo debitis? Nostrum, dolorem eaque maxime accusamus accusantium asperiores.</p>
            </div>
            </div>
        );
    }
}

export default CardComponent;