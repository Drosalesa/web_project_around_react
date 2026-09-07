import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

function NewCard(): React.JSX.Element {
  const {handleAddPlaceSubmit} = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddPlaceSubmit({name, link});
  };

  return (
    <form onSubmit={handleSubmit} className='popup__form' id='new-card-form' name='new-card-form' noValidate>
      <label className='popup__field'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='card-name'
          className='popup__input popup__input_type_card-name'
          name='name'
          placeholder='Título'
          minLength={2}
          maxLength={30}
          required
          type='text'
        />
        <span className='popup__error' id='card-name-error'></span>
      </label>
      <label className='popup__field'>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          id='card-url'
          className='popup__input popup__input_type_url'
          name='link'
          placeholder='Enlace de la imagen'
          required
          type='url'
        />
        <span className='popup__error' id='card-url-error'></span>
      </label>
      <button className='button popup__button' type='submit'>
        Crear
      </button>
    </form>
  );
}

export default NewCard