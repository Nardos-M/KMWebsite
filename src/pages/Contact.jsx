import ContactHero from "../components/ContactHero/ContactHero";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Map from "../components/Map/Map";
import ContactForm from "../components/ContactForm/ContactForm";
import SocialLinks from "../components/SocialLinks/SocialLinks";

function Contact() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <Map address="2020 27 Ave NE, Calgary, AB" />
            <ContactForm />
            <SocialLinks />
        </>
    );
}

export default Contact;
