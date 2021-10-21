import classnames from "classnames";

export default function BlogCard({image, imageClassName, date, title, caption, next }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
    
    return (
        <div className="mb-4 lg:mb-0  p-4 lg:p-0  w-6/12 relative rounded block">
        <img src={image} className={classnames( addImageClassName)} />
        <span className="text-green-700 text-sm hidden md:block mt-4"> {date} </span>
        <p className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            {title}
        </p>
        <p className="text-gray-600 mb-4">
            {caption}
        </p>
        <a href="./blog.html" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
            {next}
        </a>
        </div>
    );
}
