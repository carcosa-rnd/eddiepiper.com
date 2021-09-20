import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Contact from "../components/Contact";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Values />
      <Contact />
    </Layout>
  );
}

export default Home;
