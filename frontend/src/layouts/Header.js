export default function Header() {

    return (
        <header>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li>                
                        <a href="coucou" className="main-nav__item">
                            <img src="./images/logo/Reservia@3x.png" className="main-nav__logo" alt="logo" />
                        </a>
                    </li>
                    <li>                
                        <a href="coucou" className="main-nav__item">
                            Hébergements
                        </a>
                    </li>
                    <li>                
                        <a href="coucou" className="main-nav__item">
                            Activités
                        </a>
                    </li>
                    <li>                
                        <a href="coucou" className="main-nav__item">
                            S'inscrire
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}