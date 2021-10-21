import "./CardSlider.css";
export default function CardSlider({ image, image2, image3, imageClassNameName, title, title2, title3, caption, caption2, caption3 }) {

    return (
        <div>
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <div className="img">
                        <img src="slider-1.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="size">
                       <h3> Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text </h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="imgBx">
                    <div className="img">
                        <img src="slider-2.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="size">
                       <h3> Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text </h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="imgBx">
                    <div className="img">
                        <img src="slider-5.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="size">
                       <h3> Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text </h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="imgBx">
                    <div className="img">
                        <img src="slider-4.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="size">
                       <h3> Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text </h3>
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
}
