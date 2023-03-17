import Icon from "../components/Icon";

export default function SearchBlock() {

    return (
        <section className="search-block">
            <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
            <p>En plein centre ville ou en pleine nature</p>
            <div className="search-bar">
                <span className="search-bar__icon-container">
                    <Icon name="pin" />
                </span>
                <input type="text" className="search-bar__input" />
                <button className="search-bar__button">Rechercher</button>
            </div>
            <ul className="search-filters">
                <li className="search-filters__label">
                    Filtres
                </li>
                <li className="search-filters__item">
                    <div className="search-filters__item__icon-container">
                        <Icon name="money-bill-wave" />
                    </div>
                    Economique
                </li>
                <li className="search-filters__item">
                    <div className="search-filters__item__icon-container">
                        <Icon name="male" />
                    </div>
                    Familial
                </li>
                <li className="search-filters__item">
                    <div className="search-filters__item__icon-container">
                        <Icon name="heart-fill" />
                    </div>
                    Romantique
                </li>
                <li className="search-filters__item">
                    <div className="search-filters__item__icon-container">
                        <Icon name="dog" />
                    </div>
                    Animaux autorisés
                </li>
            </ul>
            <div className="search-information">
                <div className="search-information__icon-container">
                    <Icon name="information" />
                </div>
                Plus de 500 logements disponibles dans cette ville
            </div>
        </section>
    )
}