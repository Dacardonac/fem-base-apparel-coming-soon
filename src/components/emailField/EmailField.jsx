import e from './EmailField.module.scss';

const EmailField = ({ handleEmail, value, handleSubmit, hasError, clearError }) => {
  return (
    <>
    <form
      className={`${e.email} ${hasError ? e['email__error'] : ''}`}
      onSubmit={handleSubmit}
      noValidate
      onClick={() => { clearError(); document.getElementById('email')?.focus()} }
    >
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
      {hasError && (
        <img
          src="/images/icon-error.svg"
          alt="Error icon"
          className={e['email__error-icon']}
        />
      )}
      <button
        className={e['email__button']}
        type="submit"
      >
        <img
          className={e['email__button-svg']}
          src="images/icon-arrow.svg"
          alt="Arrow Icon"
        />
      </button>
    </form>
    <p className={e['email__error-message']}>
        {hasError ? 'Please provide a valid email' : ''}
    </p>
    </>
  );
};

export default EmailField;
