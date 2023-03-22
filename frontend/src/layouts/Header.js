import logo from "../images/logo/Reservia@3x.png"
export default function Header() {

    return (
        <header className="main-header">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <a href="coucou" className="main-nav__link">
                            <img src={logo} className="main-nav__logo" alt="logo" />
                        </a>
                    </li>
                    <li className="main-nav__item">
                        <a href="coucou" className="main-nav__link main-nav__link-active">
                            Hébergements
                        </a>
                    </li>
                    <li className="main-nav__item">
                        <a href="coucou" className="main-nav__link">
                            Activités
                        </a>
                    </li>
                    <li className="main-nav__item">
                        <a href="coucou" className="main-nav__link">
                            S'inscrire
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}