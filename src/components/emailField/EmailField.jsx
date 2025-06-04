import e from './EmailField.module.scss';

const EmailField = ({ handleEmail, value, handleSubmit, hasError, clearError }) => {
  return (
    <form className={`${e.email} ${hasError ? e['email__error'] : ''}`} onSubmit={handleSubmit} noValidate>
      <input
        className={`${e['email__input']} ${hasError ? e['email__input-error'] : ''}`}
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        onChange={handleEmail}
        onFocus={clearError}
        value={value}
      />
      <button className={e['email__button']} type="submit">
        <img className={e['email__button-svg']} src="images/icon-arrow.svg" alt="Arrow Icon" />
      </button>
    </form>
  );
};

export default EmailField;
