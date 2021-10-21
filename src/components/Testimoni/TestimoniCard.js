import classnames from "classnames";

export default function TestimoniCard({image, imageClassName, name, title, caption }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className={classnames("mr-2", addImageClassName)} src={image} />
    </div>

    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{title}</h2>

    <p className="mt-2 text-gray-600 dark:text-gray-200">{caption}</p>
    
    <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500 dark:text-indigo-300">{name}</a>
    </div>
</div>
);

}