import "./Intro.css";

import logo from "../../assets/images/eotc-church-logo.jpg";
import pope from "../../assets/images/EOTC-POPE-2.webp";

function Intro() {
    return(
        <header className="intro">
            <div className="intro-left">
                <img src={logo} alt="church Logo" />
            </div>

             <div className="intro-center">
                <h1>St. Kidanemihret</h1>

                <h2>Ethiopian Orthodox Tewahedo Church</h2>

                <p>Calgary, Alberta</p>
            </div>

             <div className="intro-right">
                <img src={pope} alt="Church Pope" />
            </div>


        </header>
    )
}

export default Intro;