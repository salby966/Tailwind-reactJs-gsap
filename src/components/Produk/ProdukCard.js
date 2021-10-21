import classnames from "classnames";

export default function ProdukCard({ name, image, imageClassName, title, caption }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <div className="filter drop-shadow-lg">
        <div className="max-w-lg mx-auto rounded-lg">
            <a href="#">
                <img className={classnames("mr-2", addImageClassName)} src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                </a>
                <p className="font-normal text-gray-700 mb-3">{caption}</p>
            </div>
        </div>
        </div>
    );
}
