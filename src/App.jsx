import { Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
//import Footer from "./components/Footer/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Intro />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;



// import "./App.css";

// function App() {
//   return (
//     <>
//       {/* Navigation */}
//       <nav className="navbar">
//         <h2 className="logo">St. Kidanemihret Church</h2>

//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#clergy">Clergy</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#news">News</a></li>
//           <li><a href="#gallery">Gallery</a></li>
//           <li><a href="#donate">Donate</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Home */}
//       <section id="home" className="section">
//         <h1>Home</h1>

//         <div className="card">Hero Banner</div>
//         <div className="card">Welcome Message</div>
//         <div className="card">Latest Announcements</div>
//         <div className="card">Upcoming Services</div>
//         <div className="card">Featured Events</div>
//         <div className="card">Quick Links</div>

//         <div className="button-group">
//           <button>Visit Us</button>
//           <button>Donate</button>
//           <button>Contact</button>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" className="section">
//         <h1>About Us</h1>

//         <div className="card">Church History</div>
//         <div className="card">Mission</div>
//         <div className="card">Vision</div>
//         <div className="card">Core Values</div>
//         <div className="card">Parish Story</div>
//         <div className="card">Our Spiritual Heritage</div>
//         <div className="card">The Significance of St. Kidanemihret</div>
//       </section>

//       {/* Clergy */}
//       <section id="clergy" className="section">
//         <h1>Clergy</h1>

//         <div className="card">Parish Priest(s)</div>
//         <div className="card">Deacons</div>
//         <div className="card">Church Administration</div>
//         <div className="card">Council Members</div>
//       </section>

//       {/* Worship Services */}
//       <section id="services" className="section">
//         <h1>Worship Services</h1>

//         <div className="card">Weekly Schedule</div>
//         <div className="card">Holy Liturgy Times</div>
//         <div className="card">Confession</div>
//         <div className="card">Baptism</div>
//         <div className="card">Weddings</div>
//         <div className="card">Memorial Services</div>
//         <div className="card">Feast Day Schedule</div>
//         <div className="card">Fasting Calendar</div>
//       </section>

//       {/* News */}
//       <section id="news" className="section">
//         <h1>News & Announcements</h1>

//         <div className="card">Church News</div>
//         <div className="card">Community Announcements</div>
//         <div className="card">Upcoming Events</div>
//         <div className="card">Volunteer Opportunities</div>
//         <div className="card">Parish Updates</div>
//       </section>

//       {/* Gallery */}
//       <section id="gallery" className="section">
//         <h1>Gallery</h1>

//         <div className="card">Worship Services</div>
//         <div className="card">Feast Celebrations</div>
//         <div className="card">Community Events</div>
//         <div className="card">Youth Activities</div>
//         <div className="card">Church Milestones</div>
//       </section>

//       {/* Donate */}
//       <section id="donate" className="section">
//         <h1>Donate</h1>

//         <div className="card">General Offerings</div>
//         <div className="card">Building Fund</div>
//         <div className="card">Charity Initiatives</div>
//         <div className="card">Special Projects</div>
//         <div className="card">Stewardship Campaigns</div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="section">
//         <h1>Contact Us</h1>

//         <div className="card">Church Address</div>
//         <div className="card">Phone Numbers</div>
//         <div className="card">Email Address</div>
//         <div className="card">Interactive Map</div>
//         <div className="card">Office Hours</div>
//         <div className="card">Contact Form</div>
//         <div className="card">Social Media Links</div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2026 St. Kidanemihret Church. All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default App;
