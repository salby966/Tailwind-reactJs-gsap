import BlogCard from "./BlogCard";
import BlogCardSub from "./BlogCardSub";

export default function BlogSection() {
    return (
        <section className="py-28" id="produk">
             <div className="container mx-auto px-10 2xl:px-0">
                
                <div className="max-w-screen-lg mx-auto">
                <div className="text-bold text-4xl text-gray-800 mb-5">Blog </div>
                <div className="flex flex-justify space-x-0 md:space-x-6 mb-16">
                    <BlogCard 
                    image="/produk1.png"
                    date="30 Sep 2021"
                    imageClassName="rounded-md object-cover w-full h-64"
                    name="Produk"
                    title="Noteworthy technology acquisitions 2021"
                    caption=" Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
                    decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
                    itself.
                    Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up."
                    next="read more"
                    />


                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />

                                <BlogCardSub 
                                image="/produk1.png"
                                date="30 Sep 2021"
                                imageClassName="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                name="Produk"
                                title="Noteworthy technology"
                                caption="Here are the biggest enterprise technology"
                                />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    );
}
