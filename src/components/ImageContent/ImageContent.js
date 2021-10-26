import classnames from "classnames";

export default function ImageContent({image, imageClassName, title, content }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <header className="bg-white dark:bg-gray-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                    <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                </div>
      
                <div className="max-w-lg lg:mx-12 lg:order-2">
                    <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{title}</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{content}</p>
                    <div className="mt-6">
                        <a href="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Download from App Store</a>
                    </div>
                </div>
            </div>
      
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src={image} />
            </div>
        </div>
      </header>
    );
}
