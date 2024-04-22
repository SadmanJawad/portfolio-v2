/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../components/Header";
import type { NextPage } from "next";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sadman's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero  */}

      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience  */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
