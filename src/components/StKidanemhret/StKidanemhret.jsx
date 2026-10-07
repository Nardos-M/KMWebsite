import PageHeader from "../PageHeader/PageHeader";
import "./StKidanemhret.css";

import kmLogo from "../../assets/images/KM logo.png";
import { useState } from "react";

function StKidanemhret() {
  const [isSimonOpen, setIsSimonOpen] = useState(false);

  return (
    <section id="st-kidanemhret-church" className="kidan">
      <PageHeader title="St. Kidanemhret Church" />

      <header className="kidan__hero">
        <img
          className="kidan__icon"
          src={kmLogo}
          alt="St. Kidanemhret icon"
          loading="lazy"
        />

        <h1 className="kidan__headline">St. Kidanemhret Church</h1>
        <p className="kidan__subhead">
          Kidane Mihret — The Covenant of Mercy
        </p>
      </header>

      <article className="kidan__card">
        <h2 className="kidan__title">Kidane Mihret — The Covenant of Mercy</h2>
        <p className="kidan__p">
          Kidane Mihret means the Covenant of Mercy. It is one of the 33 feasts
          of Our Lady, Saint Mary.
        </p>
        <p className="kidan__p">
          According to the T&auml;&rsquo;&auml;mm&auml;re Maryam (Miracles of Mary),
          there was a time when Our Lady, Saint Mary, went to the tomb of our
          Lord Jesus Christ and prayed to Him. At that time, the Jews came to
          harm her. However, our Lord hid her from their eyes, and even though
          they were guarding the place, they could not see her.
        </p>
        <p className="kidan__p">Our Lady continued going there and praying every day.</p>
        <p className="kidan__p">She said:</p>

        <blockquote className="kidan__quote">
          <p>
            “My beloved Son, remember the covenant that You made with me.
            Remember those who commemorate me, those who give to the poor in my
            name, those who build a church in my name, those who give offerings
            in my name, those who strengthen their faith and love, and those who
            name their sons and daughters after me. Have mercy on all of them
            and save them from bodily and spiritual death.”
          </p>
        </blockquote>

        <p className="kidan__p">Then our Lord Jesus Christ said to His Mother:</p>

        <blockquote className="kidan__quote">
          <p>
            “Whoever calls upon your name with good works, whoever commemorates
            you, and whoever even gives a cup of cold water in your name—I will
            give him his reward in the Kingdom of Heaven.”
          </p>
        </blockquote>

        <p className="kidan__p">As it is written:</p>

        <blockquote className="kidan__quote">
          <p>
            “He who receives a prophet in the name of a prophet shall receive a
            prophet’s reward; and he who receives a righteous man in the name of
            a righteous man shall receive a righteous man’s reward.”
          </p>
          <footer>— Matthew 10:41</footer>
        </blockquote>

        <p className="kidan__p">Our Lord also said:</p>

        <blockquote className="kidan__quote">
          <p>
            “Whoever names his son or daughter after you, I will cause his name
            to be remembered in the Kingdom of Heaven. Whoever gives alms,
            prays, gives, remembers, or performs good works in your name, I will
            receive and accept them, O honored Mother.”
          </p>
        </blockquote>

        <p className="kidan__p">Then He said:</p>

        <blockquote className="kidan__quote">
          <p>
            “I swear to you by Myself, by My Father who is living, and by the
            Holy Spirit: I enter into this covenant with you.”
          </p>
        </blockquote>

        <p className="kidan__p">
          After this, our Lord Jesus Christ ascended in glory, accompanied by
          thousands of angels.
        </p>
      </article>

      <article className="kidan__card">
        <h2 className="kidan__title">The Story of Simon, the Man-Eater</h2>
        <p className="kidan__p">
          There was a man named Simon, who was very wealthy. He was known for
          his hospitality and for feeding the poor. His house was like a place
          of hospitality where people could come and eat.
        </p>

        {!isSimonOpen && (
          <button
            type="button"
            className="kidan__moreBtn"
            onClick={() => setIsSimonOpen(true)}
          >
            … Read more
          </button>
        )}
      </article>

      {isSimonOpen && (
        <>
          <article className="kidan__card">
            <h2 className="kidan__title">The Story of Simon, the Man-Eater</h2>
            <p className="kidan__p">
              Satan became jealous of him. Satan then appeared to Simon in the form
              of three elders, saying:
            </p>
            <blockquote className="kidan__quote">
              <p>“We are the Trinity.”</p>
            </blockquote>

            <p className="kidan__p">
              In this way, Satan imitated the appearance of the three men who
              appeared to Abraham.
            </p>
            <p className="kidan__p">
              Simon received them with great honor and prepared food for them. But
              they told him:
            </p>
            <blockquote className="kidan__quote">
              <p>“We do not eat.”</p>
            </blockquote>
            <p className="kidan__p">
              Instead, they asked Simon to promise that he would do something they
              requested. Simon promised. Then they said to him:
            </p>
            <blockquote className="kidan__quote">
              <p>“If you truly love us, sacrifice your only son.”</p>
            </blockquote>

            <p className="kidan__p">
              Simon became frightened. He remembered Abraham and how Abraham was
              commanded to offer his son. Therefore, he prepared to sacrifice his
              own son.
            </p>
            <p className="kidan__p">A voice came to him saying:</p>
            <blockquote className="kidan__quote">
              <p>“Do not do it!”</p>
            </blockquote>
            <p className="kidan__p">
              It was like the voice that had spoken to Abraham. But Simon did not
              listen.
            </p>
            <p className="kidan__p">
              He killed his son and prepared him as food and served him to the
              three. Then they told him:
            </p>
            <blockquote className="kidan__quote">
              <p>“Taste it first.”</p>
            </blockquote>
            <p className="kidan__p">
              Simon tasted it. Immediately, Satan disappeared. Simon’s mind became
              disturbed, and from that time he became disgusted with every kind of
              food except human flesh.
            </p>
            <p className="kidan__p">
              Thus he became known as Bela’i Seb — the Man-Eater. At first, he ate
              members of his own family. Then he began eating his friends. After he
              had finished them, he left his home carrying a water gourd and a
              weapon. Wherever he went, he ate anyone he encountered.
            </p>
            <p className="kidan__p">Eventually, he had consumed 78 souls.</p>
            <p className="kidan__p">
              One day, while traveling, he saw a poor and sick beggar sitting by the
              road and asking for help. Simon approached him intending to eat him,
              but when he saw the wounds on the man’s body, he recoiled.
            </p>
            <p className="kidan__p">The beggar asked him:</p>
            <blockquote className="kidan__quote">
              <p>
                “Please give me some water, for the sake of the righteous and the martyrs.”
              </p>
            </blockquote>
            <p className="kidan__p">
              Simon refused. The beggar asked again, invoking the Father, the Son,
              and the Holy Spirit, but Simon still refused.
            </p>
            <p className="kidan__p">
              The beggar asked a third time, invoking the name of Saint Mary. When
              Simon heard the name of Saint Mary, he said:
            </p>
            <blockquote className="kidan__quote">
              <p>“I have heard that she intercedes. Say it again.”</p>
            </blockquote>
            <p className="kidan__p">The beggar said:</p>
            <blockquote className="kidan__quote">
              <p>
                “For the sake of the Mother of God, the Most Holy Virgin Mary, please give me water.”
              </p>
            </blockquote>
            <p className="kidan__p">Simon replied:</p>
            <blockquote className="kidan__quote">
              <p>“I have heard that she intercedes.”</p>
            </blockquote>
            <p className="kidan__p">
              He then gave the man water. But before the beggar could bring the
              water to his throat, Simon suddenly took the water gourd away from him
              and said:
            </p>
            <blockquote className="kidan__quote">
              <p>“This will be the end of me.”</p>
            </blockquote>
            <p className="kidan__p">
              He therefore did not allow the man to drink the water.
            </p>
            <p className="kidan__p">
              Yet the name of Our Mother, Saint Mary, became like a bell of
              awakening for the Man-Eater. This was not because the name of Saint
              Mary is greater than the name of God. Rather, from his childhood Simon
              had repeatedly heard about the mercy and intercession of Saint Mary.
              Therefore, God had engraved her name in his heart. Through this, God
              helped him.
            </p>
            <p className="kidan__p">Simon immediately came to his senses and said:</p>
            <blockquote className="kidan__quote">
              <p>
                “I will enter a cave. I will weep over my sins and repent. I will
                fast until my flesh clings to my bones.”
              </p>
            </blockquote>
            <p className="kidan__p">
              He entered a cave and remained there without food or water. After 21
              days, he died. Thus the T&auml;&rsquo;&auml;mm&auml;re Maryam tells us this
              story.
            </p>
          </article>

          <article className="kidan__card">
            <h2 className="kidan__title">The Intercession of Our Lady</h2>
            <p className="kidan__p">
              When Simon died, demons dressed in dark clothing came to frighten him
              and to take his soul to Hell.
            </p>
            <p className="kidan__p">
              Then Our Lady, the Most Holy Virgin Mary, came quickly and said:
            </p>
            <blockquote className="kidan__quote">
              <p>“My beloved Son, have mercy on this soul.”</p>
            </blockquote>
            <p className="kidan__p">Our Lord Jesus Christ answered:</p>
            <blockquote className="kidan__quote">
              <p>
                “My honored Mother, how can a man who has eaten 78 souls be forgiven?”
              </p>
            </blockquote>
            <p className="kidan__p">
              Then Saint Mary reminded Him of the covenant He had made with her at
              Golgotha on the 16th of February. She said:
            </p>
            <blockquote className="kidan__quote">
              <p>
                “Remember the covenant You gave me. You promised that You would have
                mercy on those who call upon your name and commemorate me.”
              </p>
            </blockquote>
            <p className="kidan__p">
              Then our Lord commanded that Simon’s soul be weighed. When they weighed
              it, the water gourd was found on the scale. Our Lord said:
            </p>
            <blockquote className="kidan__quote">
              <p>“For your sake, I have forgiven him.”</p>
            </blockquote>
            <p className="kidan__p">Then He commanded:</p>
            <blockquote className="kidan__quote">
              <p>“Show him Hell for seven days, and afterward take him into Paradise.”</p>
            </blockquote>
            <p className="kidan__p">
              The angels showed him Hell and said, “Your place was here.” Afterward,
              they took him into Paradise. All of this happened through the
              intercession of the Most Holy Virgin Mary.
            </p>

            <button
              type="button"
              className="kidan__moreBtn"
              onClick={() => setIsSimonOpen(false)}
            >
              Show less
            </button>
          </article>
        </>
      )}

      <article className="kidan__card">
        <h2 className="kidan__title">About Our Parish</h2>
        <p className="kidan__p">
          Since May 1998 (G.C.), for the past 20 years, our church has served as
          a sanctuary for faith, spiritual growth, and cultural heritage for
          Ethiopian Orthodox Tewahedo Christians in Calgary and the surrounding
          areas. Named in honor of Kidane Mehret (Covenant of Mercy), our church
          stands as a testament to God&apos;s endless blessings of grace, love, and
          protection.
        </p>
        <p className="kidan__p">
          Whether you are seeking spiritual service, looking to strengthen your
          relationship with Christ, or planning to visit our community for the
          first time, we welcome you with open arms and spiritual humility.
        </p>

        <h3 className="kidan__subtitle">Our Mission and Foundation</h3>
        <p className="kidan__p">
          To preserve the Orthodox Tewahedo faith rooted in the ancient and
          apostolic tradition, to nurture our spiritual family, and to pass down
          the spiritual teachings, religious culture, and traditions of our
          homeland to future generations.
        </p>
        <ul className="kidan__list">
          <li>
            <strong>In Our Worship Services:</strong> Conducting Divine Liturgy
            (Kidasse), the Holy Sacraments, and traditional prayer services.
          </li>
          <li>
            <strong>For the Youth:</strong> Organizing children and youth in
            Sunday School to nurture and teach them Orthodox spiritual
            education, connecting them with their faith, language, and culture
            while growing up with love for their homeland.
          </li>
          <li>
            <strong>Our Community:</strong> Warmly welcoming new families
            arriving in the country as well as the elderly, providing them with
            the necessary support to settle and thrive.
          </li>
        </ul>

        <h3 className="kidan__subtitle">Celebrating 20 Years of Grace</h3>
        <p className="kidan__p">
          As we look back at the spiritual journey we began two decades ago,
          alive and growing to this day through God&apos;s good will, support, the
          protection of Our Lady Holy Virgin Mary, and her blessings, we see how
          greatly the God of the Saints has blessed our parish.
        </p>
        <p className="kidan__p">
          Our journey has been built on the diligence, spiritual prayer, and
          unity of our clergy fathers and parishioners. Reflecting on our 20-year
          history, the ups and downs we have passed through inspire hope for our
          congregation to prepare together in unity for an even stronger
          spiritual service in the future.
        </p>
      </article>
    </section>
  );
}

export default StKidanemhret;
