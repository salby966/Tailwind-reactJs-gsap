import React from 'react';
import gsap from 'gsap';
import {Power4, Power1} from "gsap";
import { trIn } from 'gsap';
import './ContentSlider.css';

class ContentSlider extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(Power1, Power4);
        function init() {
            // welcome to the moons/sun projects gallery
            gsap.set(".projects", { autoAlpha: 1 });
            gsap.set(".project", { x: "-100%" });
          
            let currentStep = 1;
            const totalSlides = document.querySelectorAll(".project").length;
          
            createTimelineIn("next", currentStep);
          
            function createTimelineIn(direction, index) {
              const goPrev = direction === "prev";
              const element = document.querySelector("div.project-" + index),
                projectClasses = element.className.split(" "),
                projectClass = projectClasses[1],
                projectTitle = document.querySelectorAll(".project__title"),
                projectSubTitle = document.querySelectorAll(".project__subtitle"),
                projectButton = document.querySelectorAll(".button__container");
          
              const tlIn = gsap.timeline({
                defaults: {
                  modifiers: {
                    x: gsap.utils.unitize(function (x) {
                      return goPrev ? Math.abs(x) : x;
                    })
                  }
                }
              });
              tlIn
                .fromTo(
                  element,
                  {
                    autoAlpha: 0,
                    x: "-100%"
                  },
                  {
                    duration: 0.6,
                    x: 0,
                    autoAlpha: 1,
                    ease: Power4.out,
                    onStart: updateClass,
                    onStartParams: [projectClass]
                  }
                )
                .from(projectTitle, {
                  x: -20,
                  y: 15,
                  autoAlpha: 0,
                  scale: 0.1,
                  rotation: "60deg",
                  transformOrigin: "50% 0",
                  stagger: 0.01,
                  duration: 0.3,
                  ease: Power1.out
                })
                .from(
                  [projectSubTitle, projectButton],
                  {
                    duration: 0.2,
                    x: -20,
                    autoAlpha: 0,
                    stagger: 0.08
                  },
                  "-=0.1"
                );
          
              return tlIn;
            }
          
            function createTimelineOut(direction, index) {
              const goPrev = direction === "prev";
              const element = document.querySelector("div.project-" + index),
                tlOut = gsap.timeline();
          
              tlOut.to(element, {
                duration: 0.7,
                x: 250,
                autoAlpha: 0,
                modifiers: {
                  x: gsap.utils.unitize(function (x) {
                    return goPrev ? -x : x;
                  })
                },
                ease: "back.in(2)"
              });
          
              return tlOut;
            }
          
            function updateCurrentStep(gotoIndex) {
              currentStep = gotoIndex;
          
              // set active class to the current dot
              document.querySelectorAll(".dot").forEach(function (element, index) {
                element.setAttribute("class", "dot");
                if (index + 1 === currentStep) {
                  element.classList.add("active");
                }
                console.log({ currentStep }, { index });
              });
              positionDot();
            }
          
            function transition(direction, toIndex) {
              const tlTransition = gsap.timeline({
                  onStart: function () {
                    console.log({ fomIndex: currentStep }, { toIndex });
                    updateCurrentStep(toIndex);
                  }
                }),
                trOut = createTimelineOut(direction, currentStep);
              (trIn = createTimelineIn(direction, toIndex));
                tlTransition.add(trOut).add(trIn);
          
              return tlTransition;
            }
          
            function isTweening() {
              return gsap.isTweening(".project");
            }
          
            document.querySelector("button.prev").addEventListener("click", (evt) => {
              evt.preventDefault();
          
              const isFirst = currentStep === 1;
              const prevStep = isFirst ? totalSlides : currentStep - 1;
              !isTweening() && transition("prev", prevStep);
            });
            document.querySelector("button.next").addEventListener("click", (evt) => {
              evt.preventDefault();
          
              const isLast = currentStep === totalSlides;
              const nextStep = isLast ? 1 : currentStep + 1;
              !isTweening() && transition("next", nextStep);
            });
          
            function updateClass(projectClass) {
              document.querySelector("body").className = projectClass;
            }
          
            function createNavigation() {
              // create dots
              const navDiv = document.createElement("div");
              navDiv.setAttribute("class", "dots");
          
              // add active dot
              const spot = document.createElement("div");
              spot.setAttribute("class", "spot");
          
              for (let index = 1; index < totalSlides + 1; index++) {
                const dotElement = document.createElement("button");
                const dotText = document.createTextNode(index);
                dotElement.appendChild(dotText);
                dotElement.setAttribute("class", "dot");
                if (currentStep === 1) {
                  dotElement.classList.add("active");
                }
          
                dotElement.addEventListener("click", () => {
                  if (!isTweening() && currentStep !== index) {
                    const direction = index > currentStep ? "next" : "prev";
                    transition(direction, index);
                  }
                });
          
                navDiv.appendChild(dotElement);
              }
              navDiv.appendChild(spot);
              document.querySelector(".projects").appendChild(navDiv);
              positionDot();
            }
            function positionDot() {
              const activeDotX = document.querySelector(".dot.active").offsetLeft;
              const spot = document.querySelector(".spot");
              const spotX = spot.offsetLeft;
              const destinationX = Math.round(activeDotX - spotX + 5);
          
              console.log({ activeDotX });
              console.log({ spotX });
          
              const dotTl = gsap.timeline();
              dotTl
                .to(spot, {
                  duration: 0.4,
                  x: destinationX,
                  scale: 2.5,
                  ease: "power1.Out"
                })
                .to(spot, {
                  duration: 0.1,
                  scale: 1,
                  ease: "power1.in"
                });
            }
            createNavigation();
          }
          
          window.addEventListener("load", function () {
            init();
          });
    }

    render(){
        return(
             <div className="wrapper">
    <div className="projects">

      <button className="btn prev"><span>Prev</span></button>
      <button className="btn next"><span>Next</span></button>

      <div className="project project-1">
        <div className="project__image project__image--one">
        </div>
        <h2 className="project__title">Green Tea Moon</h2>
        <p className="project__subtitle">Matcha in Action</p>
        <p className="button__container">
          <a href="#" className="button" target="_blank">
            View Project
          </a>
        </p>

      </div>

      <div className="project project-2">
        <div className="project__image">
        </div>
        <h2 className="project__title">Blackened Moon</h2>
        <p className="project__subtitle">Smudged Eyes</p>
        <p className="button__container">
          <a className="button" href="#" target="_blank">
            View Project
          </a>
        </p>

      </div>

      <div className="project project-3">
        <div className="project__image">
        </div>
        <h2 className="project__title">Rising Sun</h2>
        <p className="project__subtitle">Early Rises...</p>
        <p className="button__container">
          <a className="button" href="#" target="_blank">
            View Project
          </a>
        </p>
      </div>

    </div>
  </div>
        )
    }
}

export default ContentSlider;