export default function VerySmallShoppingTile2(props) {
    return (
        <div className="containerForVerySmallShoppingTile2">
            <div>
                <p>{props.title}</p>
                <a href={props.link} target="_blank">{props.linkName}</a>
            </div>
            <img src={props.image} />
        </div>
    )
}