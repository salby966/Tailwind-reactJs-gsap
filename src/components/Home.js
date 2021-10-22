import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Hero from './hero/Hero';
import ProdukSection from './Produk/ProdukSection';
import BlogSection from './Blog/BlogSection';
import Video from "./Video/Video";
import TestimoniSection from './Testimoni/TestimoniSection';

function Home() {
  return (
    <div className="home">
      <main class="relative container mx-auto bg-white px-4">
      <Router>
        <Switch><Hero /></Switch>
        <Switch><ProdukSection /></Switch>
        <Switch> <BlogSection /></Switch>
        <Switch> <Video /></Switch>
        <Switch> <TestimoniSection /></Switch>
      </Router>
      </main>
    </div>
  );
}

export default Home;
