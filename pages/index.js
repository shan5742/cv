import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Asam Shan | cv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Contact />
        <Skills />
        <Work />
        <Education />
        <Footer />
      </main>
    </div>
  );
}
