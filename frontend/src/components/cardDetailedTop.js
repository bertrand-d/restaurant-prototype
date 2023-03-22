import Icon from "./Icon"
import image from "../images/hebergement/annie-spratt.jpg"

export default function CardDetailedTop(props) {

    return (
        <a className="card-detailed-top" href="#">
            <div className="card-detailed-top__top-container">
                <img src={image} alt="hotel" />
            </div>
            <div className="card-detailed-top__bottom-container">
                <span className="card-detailed-top__title">Titre de l'hotel</span>
                <span className="card-detailed-top__description">
                    Nuit à partir de <span className="card-detailed-top__description__currency">€</span>
                </span>
                <div className="card-detailed-top__notation">
                    <Icon name="dog" />
                    <Icon name="dog" />
                </div>
            </div>
        </a>
    )
}