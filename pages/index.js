import Head from "next/head";
import Navbar from "../src/components/navbar/Navbar";
import About from "../src/components/about/About";
import Header from "../src/components/header/Header";
import Skills from "../src/components/skills/Skills";
import Portfolio from "../src/components/portfolio/Portfolio";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Lionel Castro</title>
        <meta name="description" content="Portfolio of Lionel Castro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
