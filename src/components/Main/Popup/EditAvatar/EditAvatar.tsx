function EditAvatar(): React.JSX.Element {
  return (
    <form className='popup__form' id='edit-avatar-form' name='edit-avatar-form' noValidate>
      <label className='popup__field'>
        <input
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