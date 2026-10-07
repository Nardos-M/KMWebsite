import { Routes, Route, Navigate } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
//import Footer from "./components/Footer/Footer";
import WelcomeSection from "./components/WelcomeSection/Welcome.jsx";
import Belief from "./components/Belief/Belief.jsx";
import OurHistory from "./components/OurHistory/OurHistory.jsx";
import StKidanemhret from "./components/StKidanemhret/StKidanemhret.jsx";
import OurClergy from "./components/OurClergy/OurClergy.jsx";
import Decons from "./components/Decons/Decons.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <>
      <Intro />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/st-kidanemihret" element={<StKidanemhret />} />
        <Route path="/about" element={<About />}>
          <Route path="welcome" element={<WelcomeSection />} />
          <Route path="belief" element={<Belief />} />
          <Route path="our-history" element={<OurHistory />} />
          <Route path="st-kidanemihret" element={<Navigate to="/st-kidanemihret" replace />} />
          <Route path="our-church-history" element={<Navigate to="/st-kidanemihret" replace />} />
          <Route path="our-clergy" element={<OurClergy />} />
          <Route path="group-of-deacons" element={<Decons />} />
        </Route>

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
