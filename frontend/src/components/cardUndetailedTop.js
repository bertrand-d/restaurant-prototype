import { HOST } from "../utils/constants"

export default function CardUnDetailedTop(props) {

    const {title, picture} = props.activity.attributes
    const url = HOST + picture.data.attributes.url

    return (
        <a className="card-undetailed" href="#">
            <div className="card-undetailed__picture-container">
                <img src={url} alt="activité" />
            </div>
            <div className="card-undetailed__infos-container">
                <span className="card-undetailed__title">{title}</span>
            </div>
        </a>
    )
}