import "./Hero.css";
import { useEffect, useRef, useState } from "react";

import heroImage1 from "../../assets/images/Hero-1.jpg";
import heroImage2 from "../../assets/images/Hero 2.jpg";
import heroImage3 from "../../assets/images/Hero 3.jpg";
import heroImage4 from "../../assets/images/Hero 4.JPG";
import heroImage5 from "../../assets/images/Hero 5.jpg";
import heroImage6 from "../../assets/images/Hero 6.jpg";

const IMAGES = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

const INTERVAL_MS = 5000;
const FADE_MS = 800;

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1 % IMAGES.length);
  const [isFading, setIsFading] = useState(false);

  const currentImageRef = useRef(0);
  const isFadingRef = useRef(false);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    // Preload images so decoding doesn't block at the loop boundary. coz its delaying...
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decode?.().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isFadingRef.current) return;

      const next = (currentImageRef.current + 1) % IMAGES.length;
      setNextImage(next);
      setIsFading(true);
      isFadingRef.current = true;

      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        currentImageRef.current = next;
        setCurrentImage(next);
        setIsFading(false);
        isFadingRef.current = false;
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => {
      clearInterval(timer);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${IMAGES[currentImage]})`,
          opacity: isFading ? 0 : 1,
        }}
      />
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${IMAGES[nextImage]})`,
          opacity: isFading ? 1 : 0,
        }}
      />
      <div className="overlay">
        {/* <h1>St. Kidanemihret Ethiopian orthodox Tewahdo church, Calgary</h1> */}
        {/* <p>Worship {"\u2022"} Prayer {"\u2022"} Fellowship</p> */}
      </div>
    </section>
  );
}

export default Hero;
