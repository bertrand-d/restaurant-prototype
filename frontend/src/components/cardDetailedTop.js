import { HOST } from "../utils/constants"
import Icon from "./Icon"

export default function CardDetailedTop(props) {

    const {name, price, picture} = props.hostel.attributes

    const url = HOST + picture.data.attributes.url

    return (
        <a className="card-detailed-top" href="#">
            <div className="card-detailed-top__top-container">
                <img src={url} alt="hotel" />
            </div>
            <div className="card-detailed-top__bottom-container">
                <span className="card-detailed-top__title">{name}</span>
                <span className="card-detailed-top__description">
                    Nuit à partir de {price}
                    <span className="card-detailed-top__description__currency"> €</span>
                </span>
                <div className="card-detailed-top__notation">
                    <Icon name="dog" />
                    <Icon name="dog" />
                </div>
            </div>
        </a>
    )
}