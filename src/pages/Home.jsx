import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default Home;
