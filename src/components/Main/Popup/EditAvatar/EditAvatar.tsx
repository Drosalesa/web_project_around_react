import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.tsx";

function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(avatarRef.current) {
      handleUpdateAvatar(avatarRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='popup__form' id='edit-avatar-form' name='edit-avatar-form' noValidate>
      <label className='popup__field'>
        <input
          ref={avatarRef}
          id='avatar'
          className='popup__input popup__input_type_url'
          name='avatar'
          placeholder='Enlace a la imagen'
          required
          type='url'
        />
        <span className='popup__error popup__error_avatar'></span>
      </label>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar