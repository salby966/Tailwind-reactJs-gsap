import SectionTitle from "../SectionTitle";
import TestimoniCard from "./TestimoniCard";

export default function TestimoniSection(){
   return (
        <div className="container mx-auto px-10 2xl:px-0 pt-20">
            <div className="text-bold text-4xl text-center text-gray-800 mb-5"><b>Testimonial</b> </div>
            <SectionTitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </SectionTitle>
            <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <TestimoniCard 
                             image="/profile.png"
                             imageClassName="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                             name="John Doe"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>

                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <TestimoniCard 
                             image="/profile.png"
                             imageClassName="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                             name="Hanna"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>

                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <TestimoniCard 
                             image="/profile.png"
                             imageClassName="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                             name="Moe"
                             title="Noteworthy technology"
                             caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        />
                    </div>
            </div>
        </div>
    );
}