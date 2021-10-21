import ProdukCard from "./ProdukCard";
import styles from './ProdukCard.css';

export default function ProdukSection() {
    return (
        <section className="py-28" id="produk">
            <div className="container mx-auto px-10 2xl:px-0">
                <div className="text-bold text-4xl text-gray-800">What is Lorem Ipsum</div>

                <div className="flex -mx-4 mt-10 flex-wrap">
                    <div className="md:w-3/12 w-full px-4 pb-8">
                    <div className={styles.btn}>
                    <span className={styles.noselect}>
                    <ProdukCard 
                    image="/produk1.png"
                    imageClassName="w-full rounded-t-lg"
                    name="Produk"
                    title="Noteworthy technology"
                    caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    />
                    </span>
                    </div>
                    </div>

                    <div className="md:w-3/12 w-full px-4 pb-8">
                    <div className={styles.btn}>
                    <span className={styles.noselect}>
                    <ProdukCard 
                    image="/produk1.png"
                    imageClassName="w-full rounded-t-lg"
                    name="Produk"
                    title="Noteworthy technology"
                    caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    />
                    </span>
                    </div>
                    </div>

                    <div className="md:w-3/12 w-full px-4 pb-8">
                    <div className={styles.btn}>
                    <span className={styles.noselect}>
                    <ProdukCard 
                    image="/produk1.png"
                    imageClassName="w-full rounded-t-lg"
                    name="Produk"
                    title="Noteworthy technology"
                    caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    />
                    </span>
                    </div>
                    </div>

                    <div className="md:w-3/12 w-full px-4 pb-8">
                    <div className={styles.btn}>
                    <span className={styles.noselect}>
                    <ProdukCard 
                    image="/produk1.png"
                    imageClassName="w-full rounded-t-lg"
                    name="Produk"
                    title="Noteworthy technology"
                    caption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                    />
                    </span>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
