import type { PopupConfig } from '../../../types/types.ts';
import type { CardProps } from '../../../types/types.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup.tsx';


export default function Card(props: CardProps): React.JSX.Element {
    const {name, link} = props.card
    const imageComponent: PopupConfig = {
    children: <ImagePopup key={props.card._id} card={props.card}/>
  };
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
      />
      <div className='card__description'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Like card'
          type='button'
          className='card__like-button'
        />
      </div>
    </li>
  );
}