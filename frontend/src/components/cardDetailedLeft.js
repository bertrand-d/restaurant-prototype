import { HOST } from "../utils/constants"
import Icon from "./Icon"

export default function CardDetailedLeft(props) {

    const { name, price, picture, notation } = props.hostel.attributes
    let stars = []

    function generateStars(number) {
        const max = 5

        for (let i = 0; i < number; i++) {
            stars.push(<Icon name="star" />)
        }

        for(let j = 0; j < max - number ; j++) {
            stars.push(<Icon name="star" style="inactive" />)
        }
    }

    generateStars(notation)

    const url = HOST + picture.data.attributes.url

    return (
        <a className="card-detailed card-detailed--left" href="#">
            <div className="card-detailed__picture-container card-detailed__picture-container--left">
                <img src={url} alt="hotel" />
            </div>
            <div className="card-detailed__infos-container">
                <span className="card-detailed__title">{name}</span>
                <span className="card-detailed__description">
                    Nuit à partir de {price}
                    <span className="card-detailed__description__currency"> €</span>
                </span>
                <div className="card-detailed__notation card-detailed__notation--margin-top">
                    {stars}
                </div>
            </div>
        </a>
    )
}