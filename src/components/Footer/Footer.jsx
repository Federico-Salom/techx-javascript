import "./Footer.css";
import TextoLogo from "../../assets/logo_texto_TechX.png";

function Footer() {
    return (
        <footer className="footer">
            <a href="/" className="footer__link"><img src={TextoLogo} alt="logo" className="link__banner" /></a>
        </footer>
    );
}

export default Footer;