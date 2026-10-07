import PageHeader from "../PageHeader/PageHeader";
import "./Welcome.css";
import { useEffect, useMemo, useRef, useState } from "react";

const YOUTUBE_ID = "iTe2M54EYuY";
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;
const YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
const YOUTUBE_THUMB = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;

const DEFAULT_FAQS = [
  {
    question: "What time are services?",
    answer:
      "Sunday 4:00 am - 9:00 am, Friday 6:00 pm - 07:30 pm",
  },
  {
    question: "What should I wear?",
    answer:
      "If available, earing Netela and long skirt for ladies.",
  },
  {
    question: "Can I bring children?",
    answer:
      "Yes. Children are very welcome :)",
  },
  {
    question: "Who can I talk to if I have questions?",
    answer:
      "You can direct visitors to clergy, greeters, or contact info in our church.",
  },
];

function Welcome({ faqs = DEFAULT_FAQS }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const closeBtnRef = useRef(null);

  const closeVideo = useMemo(() => () => setIsVideoOpen(false), []);

  useEffect(() => {
    if (!isVideoOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus?.();

    function onKeyDown(event) {
      if (event.key === "Escape") closeVideo();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeVideo, isVideoOpen]);

  return (
    <section id="welcome" className="welcome">
      <PageHeader title="Welcome" />

      <div className="welcome__hero">
        <h1 className="welcome__headline">Welcome, we&apos;re glad you&apos;re here!</h1>
        <p className="welcome__verse">
          New visitors will find there are many new things to experience in an
          Ethiopian Orthodox Tewahdo Church service. Feel free to go at your own
          pace, ask any questions you want, and know you are most welcome to
          &ldquo;come and see&rdquo; (John 1:39)
        </p>
      </div>

      <div className="welcome__video">
        <button
          type="button"
          className="welcome__videoTrigger"
          onClick={() => setIsVideoOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isVideoOpen ? "true" : "false"}
        >
          <span className="welcome__videoThumbWrap">
            <img
              className="welcome__videoThumb"
              src={YOUTUBE_THUMB}
              alt="Play welcome video"
              loading="lazy"
            />
            <span className="welcome__videoScrim" aria-hidden="true" />
            <span className="welcome__videoPlay" aria-hidden="true">
              ▶
            </span>
            <span className="welcome__videoMeta">
              <span className="welcome__videoTitle">Watch welcome video</span>
              <span className="welcome__videoUrl">{YOUTUBE_URL}</span>
            </span>
          </span>
        </button>

        {isVideoOpen && (
          <div
            className="welcome__modalBackdrop"
            role="dialog"
            aria-modal="true"
            aria-label="Welcome video"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeVideo();
            }}
          >
            <div className="welcome__modal">
              <button
                ref={closeBtnRef}
                type="button"
                className="welcome__modalClose"
                onClick={closeVideo}
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="welcome__modalFrame">
                <iframe
                  title="Welcome video"
                  src={YOUTUBE_EMBED}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="welcome__faq" aria-label="Frequently asked questions">
        <h2 className="welcome__faqTitle">Frequently Asked Questions</h2>

        <div className="welcome__faqList">
          {faqs.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={item.question} className="welcome__faqItem">
                <button
                  type="button"
                  className="welcome__faqQ"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={() =>
                    setOpenFaqIndex((prev) => (prev === index ? -1 : index))
                  }
                >
                  <span>{item.question}</span>
                  <span className="welcome__faqChevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <div className="welcome__faqA">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Welcome;
