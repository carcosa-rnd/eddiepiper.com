import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}

export default Home;
