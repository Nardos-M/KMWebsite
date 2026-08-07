import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <main style={{ padding: "32px 18px", maxWidth: 980, margin: "0 auto" }}>
      <h1>About</h1>

      <section id="welcome" style={{ marginTop: 28 }}>
        <h2>Welcome</h2>
        <p>Coming soon.</p>
      </section>

      <section id="beliefs" style={{ marginTop: 28 }}>
        <h2>Beliefs</h2>
        <p>Coming soon.</p>
      </section>

      <section id="our-history" style={{ marginTop: 28 }}>
        <h2>Our history</h2>
        <p>Coming soon.</p>
      </section>

      <section id="st-kidanemihret" style={{ marginTop: 28 }}>
        <h2>St. Kidanemhret</h2>
        <p>Coming soon.</p>
      </section>

      <section id="our-church-history" style={{ marginTop: 28 }}>
        <h2>Our church History</h2>
        <p>Coming soon.</p>
      </section>

      <section id="our-clergy" style={{ marginTop: 28 }}>
        <h2>Our Clergy</h2>
        <p>Coming soon.</p>
      </section>

      <section id="group-of-deacons" style={{ marginTop: 28 }}>
        <h2>Group of Decons</h2>
        <p>Coming soon.</p>
      </section>
    </main>
  );
}

export default About;

