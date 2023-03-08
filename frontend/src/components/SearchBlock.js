import Icon from "../components/Icon";

export default function SearchBlock() {

    return (
        <section className="search-block">
            <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
            <p>En plein centre ville ou en pleine nature</p>
            <div className="search-bar">
                <span className="search-bar__icon">
                    <Icon name="pin"/>
                </span>
                <input type="text" className="search-bar__input"/>
                <button className="search-bar__button">Rechercher</button>
            </div>
            <div>
                filters
            </div>
            <div>
                number of hostels in the city
            </div>
        </section>
    )
}