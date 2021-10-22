import React from 'react';
import './Carousel.css';
import $ from 'jquery';

class Carousel extends React.Component{
    componentDidMount(){
        $(document).ready(function(){
            var flag=1;
             $("#nex").click(function(){
                if(flag==0)
                 {
                     $("#side1").css("z-index","999");
                     $("#side2").css("z-index","9");
                     $("#side3").css("z-index","9");
                     $("#side1").css("transform","translateX(0px) scale(1.5)");
                     $("#side2").css("transform","translateX(-100px) scale(1)");
                     $("#side3").css("transform","translateX(100px)");
                     flag=1;
                 }
                 else if(flag==1)
                 {
                     $("#side3").css("z-index","999");
                     $("#side2").css("z-index","9");
                     $("#side1").css("z-index","9");
                     $("#side3").css("transform","translateX(0px) scale(1.5)");
                     $("#side1").css("transform","translateX(-100px) scale(1)");
                     $("#side2").css("transform","translateX(100px)");
                     flag=2;
                 }
                 else if(flag==2)
                 {
                     $("#side2").css("z-index","999");
                     $("#side3").css("z-index","9");
                     $("#side1").css("z-index","9");
                     $("#side2").css("transform","translateX(0px) scale(1.5)");
                     $("#side3").css("transform","translateX(-100px) scale(1)");
                     $("#side1").css("transform","translateX(100px)");
                     flag=0;
                 }
             });
             $("#pre").click(function(){
                if(flag==0)
                 {
                     $("#side3").css("z-index","999");
                     $("#side2").css("z-index","9");
                     $("#side1").css("z-index","9");
                     $("#side3").css("transform","translateX(0px) scale(1.5)");
                     $("#side1").css("transform","translateX(-100px) scale(1)");
                     $("#side2").css("transform","translateX(100px)");
                     flag=2;
                 }
                 else if(flag==1)
                 {
                     $("#side2").css("z-index","999");
                     $("#side3").css("z-index","9");
                     $("#side1").css("z-index","9");
                     $("#side2").css("transform","translateX(0px) scale(1.5)");
                     $("#side3").css("transform","translateX(-100px) scale(1)");
                     $("#side1").css("transform","translateX(100px)");
                     flag=0;
                 }
                 else if(flag==2)
                 {
                     $("#side1").css("z-index","999");
                     $("#side2").css("z-index","9");
                     $("#side3").css("z-index","9");
                     $("#side1").css("transform","translateX(0px) scale(1.5)");
                     $("#side2").css("transform","translateX(-100px) scale(1)");
                     $("#side3").css("transform","translateX(100px)");
                     flag=1;
                 }
             });    
         });
    }

    render(){
        return( 
            <section className="py-28" id="produk">
            <div className="container mx-auto px-10 2xl:px-0">
               <div className="max-w-screen-lg mx-auto">
            <main class="relative container mx-auto bg-white px-4">
                <div id="pre">
                PREVIOUS
                </div>
                <div id="main">
                <div id="side1">
                    <img src="https://github.com/DaftCreation/Card-Slider/blob/master/AGRA.jpg?raw=true" height="100%" width="100%" />
                </div>
                <div id="side2">
                    <img src="https://github.com/DaftCreation/Card-Slider/blob/master/NEW%20YORK.jpg?raw=true" height="100%" width="100%" />
                </div>
                <div id="side3">
                    <img src="https://github.com/DaftCreation/Card-Slider/blob/master/PARIS.jpg?raw=true" height="100%" width="100%" />
                </div>
                </div>
                <div id="nex">
                NEXT
                </div>
            </main>
            </div>
            </div>
            </section>    
        )
    }
}

export default Carousel;