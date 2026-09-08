import type { RemoveCardProps } from "../../../../types/types"

function RemoveCard(props: RemoveCardProps): React.JSX.Element {
    
    const handleClick = () => {
        props.handleCardDelete(props.card);
    }

    return (
        <>
        <button onClick={handleClick}
        className="button popup__button" type="button">Si</button>
        </>
    )
}

export default RemoveCard