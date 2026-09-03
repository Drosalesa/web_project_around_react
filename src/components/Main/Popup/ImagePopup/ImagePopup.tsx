import type { ImageProps } from "../../../../types/types.ts"

function ImagePopup(props: ImageProps): React.JSX.Element {
    const {name, link} = props.card;
    return (
        <>
        <img 
          className="popup__image"
          alt={name} 
          src={link} />
          <p className="popup__caption">{name}</p>
        </>
    )
}

export default ImagePopup