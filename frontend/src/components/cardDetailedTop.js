import { HOST } from "../utils/constants"
import Icon from "./Icon"

export default function CardDetailedTop(props) {

    const { name, price, picture, notation } = props.hostel.attributes

    function generateStars(number) {
        const max = 5
        const stars = []

        for (let i = 0; i < max; i++) {
            if (i < number) {
                stars.push(<Icon name="star" />)
            } else {
                stars.push(<Icon name="star" style="inactive" />)   
            }
        }
        return stars
    }

    const stars = generateStars(notation)
    const url = HOST + picture.data.attributes.url

    return (
        <a className="card-detailed card-detailed--top" href="#">
            <div className="card-detailed__picture-container card-detailed__picture-container--top">
                <img src={url} alt="hotel" />
            </div>
            <div className="card-detailed__infos-container">
                <span className="card-detailed__title">{name}</span>
                <span className="card-detailed__description">
                    Nuit à partir de {price}
                    <span className="card-detailed__description__currency">€</span>
                </span>
                <div className="card-detailed__notation">
                    {stars}
                </div>
            </div>
        </a>
    )
}