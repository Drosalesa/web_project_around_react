import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import Footer from './Footer/Footer.tsx'
import { useEffect, useState } from 'react';
import {api} from '../utils/api.ts';
import CurrentUserContext from '../contexts/CurrentUserContext';
import type { UserData, UserFormData, CardData, PopupConfig, CardFormData } from '../types/types.ts';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const handleCardLike = async (card: CardData) => {
    const isLiked = card.isLiked;
    try {
      const apiCall = isLiked ? api.removeLike(card._id) : api.addLike(card._id);
      const newCard = await apiCall;
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardDelete = async (card: CardData) => {
    try {
      await api.deleteCard(card._id);
      setPopup(null);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = async (user: UserFormData) => {
    try {
      const updatedUser = await api.updateUserInfo(user);
      setCurrentUser(updatedUser);
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdateAvatar = async (avatar: string) => {
    try {
      const updatedUser = await api.updateAvatar(avatar);
      setCurrentUser(updatedUser);
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddPlaceSubmit = async (data: CardFormData) => {
    try {
      const newCard = await api.postNewCard(data);
      setCards ((state) => [newCard, ...state]);
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect con un arreglo vacío [] se ejecuta UNA SOLA VEZ al cargar la página
  useEffect(() => {
    (async () => {
      try {
        const [userData, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards()
        ]);
        setCurrentUser(userData);
        setCards(initialCards);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  
  function handleOpenPopup(popup: PopupConfig) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    // Proveemos los datos a toda la aplicación
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className='page__content'>
        <Header />
        <Main
          cards={cards}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
