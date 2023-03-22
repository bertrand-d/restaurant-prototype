import { HOST } from "../utils/constants"
import Icon from "./Icon"

export default function CardDetailedTop(props) {

    const { name, price, picture, notation } = props.hostel.attributes
    let stars = []

    function generateStars(number) {
        const max = 5

        for (let i = 0; i < max; i++) {
            if (i < number) {
                stars.push(<Icon name="star" />)
            } else {
                stars.push(<Icon name="star" style="inactive" />)   
            }
        }
    }

    generateStars(notation)

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
                    <span className="card-detailed-top__description__currency">€</span>
                </span>
                <div className="card-detailed-top__notation">
                    {stars}
                </div>
            </div>
        </a>
    )
}