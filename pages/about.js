import Aboutme from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";

export default function About(params) {
  return (
    <>
      <Header />
      <Contact />
      <Aboutme />
      <History />
      <Footer />
    </>
  );
}
