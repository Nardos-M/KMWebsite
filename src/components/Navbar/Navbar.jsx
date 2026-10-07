import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutMenuId = useId();
  const aboutContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function onDocumentMouseDown(event) {
      if (!aboutContainerRef.current) return;
      if (aboutContainerRef.current.contains(event.target)) return;
      setIsAboutOpen(false);
    }

    function onDocumentKeyDown(event) {
      if (event.key === "Escape") setIsAboutOpen(false);
    }

    function onWindowScroll() {
      setIsAboutOpen(false);
    }

    document.addEventListener("mousedown", onDocumentMouseDown);
    document.addEventListener("keydown", onDocumentKeyDown);
    window.addEventListener("scroll", onWindowScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDocumentMouseDown);
      document.removeEventListener("keydown", onDocumentKeyDown);
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  useEffect(() => {
    setIsAboutOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">

      <Link to="/">Home</Link>

      <div
        className="navDropdown"
        ref={aboutContainerRef}
        onMouseEnter={() => setIsAboutOpen(true)}
        onMouseLeave={() => setIsAboutOpen(false)}
      >
        <button
          type="button"
          className="navDropdownToggle"
          aria-haspopup="menu"
          aria-expanded={isAboutOpen}
          aria-controls={aboutMenuId}
          onClick={() => setIsAboutOpen((open) => !open)}
        >
          About
        </button>

        <div
          id={aboutMenuId}
          className="navDropdownMenu"
          role="menu"
          data-open={isAboutOpen ? "true" : "false"}
        >
          <Link role="menuitem" to="/about/welcome" onClick={() => setIsAboutOpen(false)}>
            Welcome
          </Link>
          {/* <Link role="menuitem" to="/about/beliefs" onClick={() => setIsAboutOpen(false)}>
            Beliefs
          </Link> */}
          <Link role="menuitem" to="/about/our-history" onClick={() => setIsAboutOpen(false)}>
            Our history
          </Link>
          {/* <Link role="menuitem" to="/about/our-clergy" onClick={() => setIsAboutOpen(false)}>
            Our Clergy
          </Link>
          <Link role="menuitem" to="/about/group-of-deacons" onClick={() => setIsAboutOpen(false)}>
            Group of Decons
          </Link> */}
        </div>
      </div>

      <Link to="/st-kidanemihret">St. Kidanemhret Church</Link>

      <Link to="/gallery">Gallery</Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
