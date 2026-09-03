function EditProfile(): React.JSX.Element {
  return (
    <form className='popup__form' id='edit-profile-form' name='edit-profile-form' noValidate>
      <label className='popup__field'>
        <input
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