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
        <a className="card-detailed-left" href="#">
            <div className="card-detailed-left__left-container">
                <img src={url} alt="hotel" />
            </div>
            <div className="card-detailed-left__right-container">
                <span className="card-detailed-left__title">{name}</span>
                <span className="card-detailed-left__description">
                    Nuit à partir de {price}
                    <span className="card-detailed-left__description__currency"> €</span>
                </span>
                <div className="card-detailed-left__notation">
                    {stars}
                </div>
            </div>
        </a>
    )
}