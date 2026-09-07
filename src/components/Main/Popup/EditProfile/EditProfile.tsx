import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.tsx";

function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.description || '');

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser({ name, description })
  }

  return (
    <form onSubmit={handleSubmit} className='popup__form' id='edit-profile-form' name='edit-profile-form' noValidate>
      <label className='popup__field'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          className='popup__input popup__input_type_name'
          name='name'
          placeholder='Nombre'
          minLength={2}
          maxLength={40}
          required
          type='text'
        />
        <span className='popup__error popup__error_name'></span>
      </label>
      <label className='popup__field'>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id='description'
          className='popup__input popup__input_type_description'
          name='description'
          placeholder='Sobre mi'
          required
          type='text'
          minLength={2}
          maxLength={200}
        />
        <span className='popup__error popup__error_description'></span>
      </label>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}

export default EditProfile