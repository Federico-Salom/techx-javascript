import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo_TechX.png";
import TextoLogo from "../../assets/logo_texto_TechX.png";

function Header() {
    return (
        <header className="header">
            <div className="header__images">
                <a href="/" className="images__link"><img src={Logo} alt="logo" className="images__logo" /></a>
                <a href="/" className="images__link"><img src={TextoLogo} alt="logo" className="image__banner" /></a>
            </div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li><NavLink to="/" className="list__link">Inicio</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
