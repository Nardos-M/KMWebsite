import { useEffect, useMemo, useRef, useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import "./Gallery.css";

const IMAGE_MODULES = import.meta.glob(
  "../assets/images/g*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

function filenameFromPath(path) {
  return path.split("/").pop() || path;
}

function extractGNumber(filename) {
  const match = /^g(\d+)/i.exec(filename);
  if (!match) return null;
  return Number(match[1]);
}

function buildImages(maxG = 23) {
  const items = Object.entries(IMAGE_MODULES)
    .map(([path, src]) => {
      const filename = filenameFromPath(path);
      const gNumber = extractGNumber(filename);
      return { path, src, filename, gNumber };
    })
    .filter((img) => typeof img.gNumber === "number" && img.gNumber <= maxG)
    .sort((a, b) => a.gNumber - b.gNumber || a.filename.localeCompare(b.filename));

  return items.map((img) => ({
    src: img.src,
    alt: `Gallery photo ${img.gNumber}`,
  }));
}

function mixOrder(images) {
  if (images.length <= 6) return images;
  // Gentle re-order to avoid strict numerical ordering while staying predictable.
  const order = [];
  const left = images.slice();
  const pick = (index) => order.push(left.splice(index, 1)[0]);

  pick(0); // g1 first
  pick(Math.min(7, left.length - 1)); // jump forward
  pick(Math.min(3, left.length - 1));
  pick(Math.min(10, left.length - 1));

  return order.concat(left);
}

const IMAGES = mixOrder(buildImages(23));

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeBtnRef = useRef(null);

  const close = useMemo(() => () => setActiveIndex(null), []);
  const hasModal = typeof activeIndex === "number";

  useEffect(() => {
    if (!hasModal) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus?.();

    function onKeyDown(event) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft")
        setActiveIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1));
      if (event.key === "ArrowRight")
        setActiveIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1));
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, hasModal]);

  return (
    <main className="gallery">
      <PageHeader title="Gallery" />

      <header className="gallery__hero">
        <h1 className="gallery__headline">Gallery</h1>
        <p className="gallery__subhead">
          Photos from our community and church life.
        </p>
      </header>

      <section className="gallery__grid" aria-label="Photo gallery">
        {IMAGES.map((img, index) => {
          const variant =
            index === 0
              ? "gallery__item--hero"
              : index === 6
                ? "gallery__item--wide"
                : index === 10
                  ? "gallery__item--tall"
                  : "";

          return (
            <button
              key={img.src}
              type="button"
              className={`gallery__item ${variant}`.trim()}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${img.alt}`}
            >
              <img className="gallery__img" src={img.src} alt={img.alt} loading="lazy" />
            </button>
          );
        })}
      </section>

      {hasModal && (
        <div
          className="gallery__modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="gallery__modal">
            <button
              ref={closeBtnRef}
              type="button"
              className="gallery__close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>

            <button
              type="button"
              className="gallery__nav gallery__nav--left"
              onClick={() =>
                setActiveIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1))
              }
              aria-label="Previous photo"
            >
              ‹
            </button>

            <img
              className="gallery__modalImg"
              src={IMAGES[activeIndex].src}
              alt={IMAGES[activeIndex].alt}
            />

            <button
              type="button"
              className="gallery__nav gallery__nav--right"
              onClick={() =>
                setActiveIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1))
              }
              aria-label="Next photo"
            >
              ›
            </button>

            <div className="gallery__caption">
              {activeIndex + 1} / {IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
