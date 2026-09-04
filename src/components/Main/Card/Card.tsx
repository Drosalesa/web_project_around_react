import type { PopupConfig } from '../../../types/types.ts';
import type { CardProps } from '../../../types/types.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup.tsx';


export default function Card(props: CardProps): React.JSX.Element {
    const {name, link} = props.card
    const imageComponent: PopupConfig = {
    children: <ImagePopup key={props.card._id} card={props.card}/>
    };
    const cardLikeButtonClassName = `card__like-button ${
      props.card.isLiked ? "card__like-button_is-active" : ""}`
  return (
    <li className='card'>
      <img className='card__image' 
      src={link} 
      alt={name}
      onClick={() => props.handleOpenPopup(imageComponent)}
      />
      <button
        aria-label='Delete card'
        className='card__delete-button'
        type='button'
        onClick={() => props.handleCardDelete(props.card)}
      />
      <div className='card__description'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Like card'
          type='button'
          className={cardLikeButtonClassName}
          onClick={() => props.handleCardLike(props.card)}
        />
      </div>
    </li>
  );
}