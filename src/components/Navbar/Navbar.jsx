import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutMenuId = useId();
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    function onDocumentMouseDown(event) {
      if (!aboutContainerRef.current) return;
      if (aboutContainerRef.current.contains(event.target)) return;
      setIsAboutOpen(false);
    }

    function onDocumentKeyDown(event) {
      if (event.key === "Escape") setIsAboutOpen(false);
    }

    document.addEventListener("mousedown", onDocumentMouseDown);
    document.addEventListener("keydown", onDocumentKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocumentMouseDown);
      document.removeEventListener("keydown", onDocumentKeyDown);
    };
  }, []);

  return (
    <nav className="navbar">

      <Link to="/">Home</Link>

      <div className="navDropdown" ref={aboutContainerRef}>
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
