import SectionTitle from "../SectionTitle";
import CardSlider from "./CardSlider";
import Styles from "./CardSlider.css";

export default function Slider(){
   return (
      <section className={Styles.body}>
      <div className="container mx-auto px-10 2xl:px-0 pt-10">
      <div className="font-bold pb-16 text-4xl text-center text-white">Where can I get some</div>
        <section>
           <CardSlider />
        </section>
        </div>
      </section>
    );
}