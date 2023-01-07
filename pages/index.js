import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
}
