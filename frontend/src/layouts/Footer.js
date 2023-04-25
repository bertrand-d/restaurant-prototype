export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list-item-title">A propos</li>
                <li className="footer__list-item">
                    <a href="#">Fonctionnement du site</a>
                </li>
                <li className="footer__list-item">
                    <a href="#">Conditions générales</a>
                </li>
                <li className="footer__list-item">
                    <a href="#">Données et confidentialité</a>
                </li>
            </ul>
            <ul className="footer__list">
                <li className="footer__list-item-title">Nos hébergements</li>
                <li className="footer__list-item">
                    <a href="#">Charte qualité</a>
                </li>
                <li className="footer__list-item">
                    <a href="#">Proposer votre hôtel</a>
                </li>
            </ul>
            <ul className="footer__list">
                <li className="footer__list-item-title">Assistance</li>
                <li className="footer__list-item">
                    <a href="#">Centre d'aide</a>
                </li>
                <li className="footer__list-item">
                    <a href="#">Nous contacter</a>
                </li>
            </ul>
        </footer>
    )
}