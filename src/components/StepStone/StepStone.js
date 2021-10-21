import React, { useEffect, useState } from 'react'
import "./StepStone.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class StepStone extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".slick-nav").forEach((a, i) => {
            a.clickElem = document.querySelector(a.hash);
            a.offset = a.clickElem.offsetTop;
            a.height = a.clickElem.offsetHeight;
            a.addEventListener("click", e => {
              e.preventDefault();
              gsap.to(window, {scrollTo: a.offset + a.height * (i + 1)})
            });
          });
      
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger",
              duration: 1.5,
              pin: true,
              scrub: true,
              start: "top top",
              end: "+=3000",
              toggleActions: "restart pause resume pause"
            }
          });
      
          // Slides Scroll Animation
          tl.from(
              "[data-slide='1'] ", {
                opacity: 0.5,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
      
            .to(
              "[data-slide='1'] ", {
                opacity: 0,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
      
            .from(
              "[data-slide='2'] ", {
                opacity: 0,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
            .to(
              "[data-slide='2']", {
                opacity: 0,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
      
            .from(
              "[data-slide='3']", {
                opacity: 0,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
            .to(
              "[data-slide='3']", {
                opacity: 0,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
      
            .from(
              "[data-slide='4']", {
                opacity: 0,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
            .to(
              "[data-slide='4'] ", {
                opacity: 0,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
      
            .from(
              "[data-slide='5']", {
                opacity: 0,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
            .to(
              "[data-slide='5']", {
                opacity: 0,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
      
            .from(
              "[data-slide='6']", {
                opacity: 0,
                duration: 1,
                stagger: 2
              },
              "+=1"
            )
            .to(
              "[data-slide='6']", {
                opacity: 0.5,
                duration: 1,
                stagger: 2,
                ease: "power4"
              },
              "+=10"
            )
    }


render(){
    return(
        <>
        <section className="scroll-trigger">
        <ul className="slick-dots classname-display" role="tablist">
            <li className="slick-slide slide-1" role="presentation" data-slide="1">
            <a href="#section1" className="slick-nav">2003</a>
            </li>
            <li className="slick-slide slide-2" role="presentation" data-slide="2">
            <a href="#section2" className="slick-nav">2004</a>
            </li>
            <li className="slick-slide slide-3" role="presentation" data-slide="3">
            <a href="#section3" className="slick-nav">2005</a>
            </li>
            <li className="slick-slide slide-4" role="presentation" data-slide="4">
            <a href="#section4" className="slick-nav">2008</a>
            </li>
            <li className="slick-slide slide-5" role="presentation" data-slide="5">
            <a href="#section5" className="slick-nav">2013</a>
            </li>
            <li className="slick-slide slide-6" role="presentation" data-slide="6">
            <a href="#section6" className="slick-nav">2020</a>
            </li>
        </ul>

        <div className="slide-container">
            <div id="section1" className="slide" data-slide="1">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2003-timeline-banner.png"
                alt="Outfitters 2003" />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
            </div>

            <div id="section2" className="slide" data-slide="2">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2004-timeline-banner.png"
                alt="Outfitters 2004 - multi-city brand" />
            <h4>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h4>
            </div>

            <div id="section3" className="slide" data-slide="3">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2021/03/outfitters-2005-timeline-banner-v2.png"
                alt="Outfitters 2005 - Womenswear" />
            <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h4>
            </div>

            <div id="section4" className="slide" data-slide="4">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2008-timeline-banner.png"
                alt="Outfitters 2008 - Outfitters" />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
            </div>

            <div id="section5" className="slide" data-slide="5">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2013-timeline-desktop.jpg"
                alt="Outfitters 2013 - Ethnic" />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
            </div>

            <div id="section6" className="slide" data-slide="6">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2020-timeline-banner.png"
                alt="Outfitters 2020 - Bespoke Studio" />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
            </div>
        </div>
        </section>
    </>
    )
}
}

export default StepStone;