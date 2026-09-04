import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import Footer from './Footer/Footer.tsx'
import { useEffect, useState } from 'react';
import {api} from '../utils/api.ts';
import CurrentUserContext from '../contexts/CurrentUserContext';
import type { UserData, CardData, PopupConfig } from '../types/types.ts';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [popup, setPopup] = useState<PopupConfig | null>(null);

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
    <CurrentUserContext.Provider value={{ currentUser, /* pasaremos funciones aquí después */ }}>
      <div className='page__content'>
        <Header />
        <Main
          cards={cards}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
