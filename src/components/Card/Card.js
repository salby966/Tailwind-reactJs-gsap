import React from "react";
import CardComponent from "./CardComponent";

const Card = () => {
    return(
        <section className="py-28" id="produk">
        <div className="container mx-auto px-10 2xl:px-0">
            <div className="text-bold text-4xl text-gray-800">Kami Hadir Di Kota-Kota Besar</div>
            <div className="grid col-3/12 gap-2">
                <div><CardComponent /></div>
            </div>
            </div>
    </section>
    )
}

export default Card;
