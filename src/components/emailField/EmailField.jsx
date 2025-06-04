import e from './EmailField.module.scss'

const EmailField = ({ handleEmail, value, handleSubmit }) => {
  return (
    <form className={e.email} onSubmit={handleSubmit} noValidate>
      <input className={e['email__input']}
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        onChange={handleEmail}
        value={value}
      />
      <button className={e['email__button']} type="submit">
        <img className={e['email__button-svg']} src="images/icon-arrow.svg" alt="Arrow Icon" />
      </button>
    </form>
  );
}

export default EmailField;