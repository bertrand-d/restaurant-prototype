import sprite from "../sprite.svg"

export default function Icon(props) {
    return (
        <svg className = { "icon " + (props.style ? props.style : "")} role="img">
            <use href={sprite + "#" + props.name}></use>
        </svg>
    );
}