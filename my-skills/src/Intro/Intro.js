import "./Intro.css";
import {Link} from "react-router-dom";

const Intro = () => {
    return(
        <section className="intro">
            <div className="intro__headingContainer">
                <h1 className="intro__heading">Welkom bij deze vragenlijst</h1>
                <p className="intro__text">Er komen zo 7 vragen over jezelf en dan nog een andere vraag, beantwoord deze vragen alstjeblieft zo eerlijk mogelijk.</p>
            </div>
            <p className="intro__text"><Link to="/vragen/1">Klik Hier om de quiz te starten</Link> </p>

        </section>
    )
}

export default Intro;