import React from "react";
import Hero from './hero/Hero';
import ProdukSection from './Produk/ProdukSection';
import BlogSection from './Blog/BlogSection';
import Content from './ProdukContent/Content';
import BreakSection from './Break/BreakSection';
import TestimoniSection from './Testimoni/TestimoniSection';

function Home() {
  return (
    <div className="home">
      <div class="container">
      <Hero />
      <ProdukSection />
      <BlogSection />
      <Content />
      <BreakSection />
      <TestimoniSection />
      </div>
    </div>
  );
}

export default Home;
