import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/navbar/hero/Hero";
import NavBar from "./components/navbar/Navbar";
import Parallax from "./components/navbar/parallax/Parallax";
import Services from "./components/navbar/services/Services";
import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <NavBar />
      <Hero />
    </section>
    <section id="About"><About /></section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /></section>
    {/* <section>Parallax</section> */}
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <section><Portfolio /></section>
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
