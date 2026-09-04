import Popup from './Popup/Popup';
import type { PopupConfig } from '../../types/types.ts';
import NewCard from './Popup/NewCard/NewCard.tsx';
import EditProfile from './Popup/EditProfile/EditProfile.tsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.tsx';
import Card from './Card/Card.tsx';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import type { MainProps } from '../../types/types.ts';
/*
const cards: CardData[] = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];
*/
function Main(props: MainProps): React.JSX.Element {

  const { currentUser } = useContext (CurrentUserContext);

  const newCardPopup: PopupConfig = {
    title: "Nuevo lugar",
    children: <NewCard/>
  };

  const editProfilePopup: PopupConfig = {
    title: "Editar perfil",
    children: <EditProfile/>
  };

  const editAvatarPopup: PopupConfig = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar/>
  };

    return (
        <>
        <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img className="profile__image" 
            src={currentUser?.avatar}
            alt={currentUser?.name}
            onClick={() => props.handleOpenPopup(editAvatarPopup)} />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser?.name}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => props.handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{currentUser?.about}</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
            onClick={() => props.handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {props.cards.map((card) => (
              <Card
              key={card._id}
              card={card}
              handleOpenPopup={props.handleOpenPopup}
              handleCardDelete={props.handleCardDelete}
              handleCardLike={props.handleCardLike} />
            )
            )}
          </ul>
        </section>
        {props.popup && (
          <Popup
          onClose={props.handleClosePopup}
          title={props.popup.title}
          isOpen={props.popup !== null}
          >
            {props.popup.children}
          </Popup>
        )}
        </main>
        </>
    )
}

export default Main