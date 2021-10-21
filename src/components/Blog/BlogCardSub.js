import classnames from "classnames";

export default function BlogCardSub({ image, imageClassName, date, title, caption }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <div>
        <div className="rounded w-full flex flex-col md:flex-row  filter drop-shadow-lg">
            <img src={image} className={classnames(addImageClassName)} />
            <div className="bg-white rounded px-4">
            <span className="text-green-700 text-sm hidden md:block"> {date} </span>
            <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                {title}
            </div>
            <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                {caption}
            </p>
            </div>
        </div>
    </div>
    );
}
