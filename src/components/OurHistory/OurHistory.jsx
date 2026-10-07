import PageHeader from "../PageHeader/PageHeader";
import "./OurHistory.css";

import janderebaImage from "../../assets/images/ethio jandereba icon.jpg";
import newTestamentImage from "../../assets/images/new testament.jpg";
import mosesImage from "../../assets/images/moses.jpg";

const HISTORY = {
  origin: {
    title: "Religious history / origin / in the city of angels",
    paragraphs: [
      "The religion that connects the creature and the Creator, especially humans and angels with the Creator, began in the city of angels.",
      'To make this known, the Creator created the holy angels on Sunday and hid Himself from them. The devil rose up in pride and made a false voice saying, "I am the one who created you."',
    ],
    calloutTitle: "The testimony of Saint Gabriel",
    calloutBody:
      'The angel Saint Gabriel confirmed the faith of the angels by saying, "You did not create us and you cannot create us." Thus, in order to clarify the faith between the angels and the Creator, the devil was ashamed and humiliated by declaring, "Let us stand firm in our faith until we meet our Creator."',
  },
  humans: {
    title: "Religious History of Humans / Law of the Heart",
    paragraphs: [
      "The history of human beings begins with Adam, the father of us all.",
      "The Holy Bible tells us that when Adam entered Paradise, he believed in his Creator and obeyed His commandments (Genesis 2:16).",
      "Accordingly, from Adam to the Prophet Moses, the era of the father, the religion of the father, the law of the father, and the law of the heart was practiced without written books.",
    ],
  },
  oldTestament: {
    title: "The Old Testament",
    paragraphs: [
      "The Old Testament is the period from the prophet Moses to the Savior Christ. It is the period when the prophet Moses received the tablets on Mount Sinai, where the laws of the Old Testament, such as do not kill, do not steal, do not commit adultery, do not lie, were put into written service, and the implementation of fasting, prayer, worship, and sacrifices was carried out. The period is also called the Old Testament.",
      "Our country Ethiopia also accepted these laws with faith and served until the coming of Jesus Christ. Even today, except for the offering of sacrifices, the other laws have continued.",
    ],
    wantsPhoto: true,
  },
  newTestament: {
    title: "Religion in the New Testament",
    paragraphs: [
      "The Christian religion is based on the worship of Jesus Christ, who was a man (appeared as a man). We, Christians, are called Christians because He is called Christ.",
      "A Christian, that is, a follower of Christ, means one who believes in the Creator.",
      "As we have seen above, although the era and laws have different names, the one God who is believed and worshipped from Adam to this day is one.",
    ],
    wantsPhoto: true,
  },
  ethiopia: {
    title: "The Christian religion in Ethiopia",
    paragraphs: [
      "The Christian religion was introduced to Ethiopia by its own citizen Janderaba (Bacchus), the treasurer of the Nghe Andeke.",
      "Christ was born in 34 AD. It spread in Ethiopia and was declared the national religion of the country between 300 and 400 AD.",
    ],
    wantsPhoto: true,
  },
};

function OurHistory() {
  return (
    <section id="our-history" className="history">
      <PageHeader title="Our History" />

      <header className="history__hero">
        <h1 className="history__headline">Our History</h1>
        <p className="history__subhead">
          A brief overview of the religious history and its journey in Ethiopia.
        </p>
      </header>

      <div className="history__twoCol">
        <article className="history__card">
          <div className="history__kicker">1</div>
          <h2 className="history__title">{HISTORY.origin.title}</h2>
          {HISTORY.origin.paragraphs.map((text) => (
            <p key={text} className="history__p">
              {text}
            </p>
          ))}
          <div className="history__callout">
            <h3 className="history__calloutTitle">{HISTORY.origin.calloutTitle}</h3>
            <p className="history__calloutBody">{HISTORY.origin.calloutBody}</p>
          </div>
        </article>

        <article className="history__card">
          <div className="history__kicker">2</div>
          <h2 className="history__title">{HISTORY.humans.title}</h2>
          {HISTORY.humans.paragraphs.map((text) => (
            <p key={text} className="history__p">
              {text}
            </p>
          ))}
        </article>
      </div>

      <div className="history__stack">
        <article className="history__feature">
          <div className="history__media" aria-label="Moses image">
            <img
              className="history__img"
              src={mosesImage}
              alt="Moses"
              loading="lazy"
            />
          </div>
          <div className="history__content">
            <div className="history__kicker">3</div>
            <h2 className="history__title">{HISTORY.oldTestament.title}</h2>
            {HISTORY.oldTestament.paragraphs.map((text) => (
              <p key={text} className="history__p">
                {text}
              </p>
            ))}
          </div>
        </article>

        <article className="history__feature history__feature--reverse">
          <div className="history__media" aria-label="New Testament image">
            <img
              className="history__img"
              src={newTestamentImage}
              alt="New Testament"
              loading="lazy"
            />
          </div>
          <div className="history__content">
            <div className="history__kicker">4</div>
            <h2 className="history__title">{HISTORY.newTestament.title}</h2>
            {HISTORY.newTestament.paragraphs.map((text) => (
              <p key={text} className="history__p">
                {text}
              </p>
            ))}
          </div>
        </article>

        <article className="history__feature">
          <div className="history__media" aria-label="Janderaba (Bacchus) image">
            <img
              className="history__img"
              src={janderebaImage}
              alt="Janderaba (Bacchus)"
              loading="lazy"
            />
          </div>
          <div className="history__content">
            <div className="history__kicker">5</div>
            <h2 className="history__title">{HISTORY.ethiopia.title}</h2>
            {HISTORY.ethiopia.paragraphs.map((text) => (
              <p key={text} className="history__p">
                {text}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default OurHistory;
