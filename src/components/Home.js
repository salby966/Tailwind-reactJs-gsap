import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import Hero from './hero/Hero';
// import ProdukSection from './Produk/ProdukSection';
// import BlogSection from './Blog/BlogSection';
// import Video from "./Video/Video";
// import Card from "./Card/Card";
// import TestimoniSection from './Testimoni/TestimoniSection';
import Half from './Half/Half';

function Home() {
  return (
    <div className="home">
      <main class="relative container mx-auto bg-white px-4">
      <Router>
        {/* <Switch><Hero /></Switch>
        <Switch><ProdukSection /></Switch>
        <Switch> <BlogSection /></Switch>
        <Switch> <Video /></Switch>
        <Switch> <Card /> </Switch>
        <Switch> <TestimoniSection /></Switch> */}
        <Switch><Half /></Switch>
      </Router>
      </main>
    </div>
  );
}

export default Home;
