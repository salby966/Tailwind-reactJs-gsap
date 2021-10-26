import "./ImageContent.css";
import React from 'react';
import gsap from 'gsap';
import { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class ImageContentSection extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
          //reveal gambar
          let revealContainers = document.querySelectorAll(".reveal");
          revealContainers.forEach((moveImage) => {
            let image = moveImage.querySelector("img");
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: moveImage,
                // scrub: true,
                toggleActions: "restart none none reset"
              }
            });
          
            tl.set(moveImage, { autoAlpha: 1 });
            tl.from(moveImage, 1.5, {
              xPercent: -100,
              ease: Power2.out
            });
            tl.from(image, 1.5, {
              xPercent: 100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out
            });
          });
  
          //line Animasi
          gsap.from(".line-1", {
              scrollTrigger: {
                trigger: ".line-1",
                scrub: true,
                markers: true,
                start: "top bottom",
                end: "top top"
              },
              scaleX: 0,
              transformOrigin: "left center", 
              ease: "none",
            });
          
    }
    render(){
        return (
            <header className="bg-white dark:bg-gray-800">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    
                    <div className="max-w-lg lg:mx-12 lg:order-2 text-reveal">
                    <span className="line line-1"></span>
                    <span>
                        <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl hero__content hero_headline">What is Lorem Ipsum?</h1>
                    </span>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                </div>

                <div className="moveImage">
                     <div className="flex items-center justify-center w-full h-96 lg:w-1/2 reveal">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
                </div>
            </div>

            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                    <div className="max-w-lg lg:mx-12 lg:order-2 justify-center">
                    <span className="line line-1"></span>
                        <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl text-reveal">What is Lorem Ipsum?</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                </div>

                <div className="moveImage">
                     <div className="flex items-center justify-center w-full h-96 lg:w-1/2 reveal">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
                </div>
            </div>

            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          
                    <div className="max-w-lg lg:mx-12 lg:order-2">
                        <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl text-reveal"><span className="line line-1"></span><span>What is Lorem Ipsum?</span></h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                </div>

                <div className="moveImage">
                     <div className="flex items-center justify-center w-full h-96 lg:w-1/2 reveal">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
                </div>
            </div>
          </header>
        );
    }
}
export default ImageContentSection;
