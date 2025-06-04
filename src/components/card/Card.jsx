import { useState } from 'react';
import Illustration from '../illustration/Illustration';
import EmailField from '../emailField/EmailField';
import logo from '/images/logo.svg';
import c from './Card.module.scss';

const Card = ({ /*title,*/ paragraph }) => {
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '') {
      alert('Please enter an email');
    } else if (!regex.test(email)) {
      /* Implementar las toast de SweetAlert2 */
      alert('please enter a valid email');
    } else {
      alert('Correct');
      setEmail('');
    }
  };

  return (
    <article className={c.card}>
      <figure className={c['card__logo']}>
        <img
          className={c['card__logo-svg']}
          src={logo}
          alt="Base Apparel Logo"
        />
      </figure>
      <Illustration />
      <h1 className={c['card__title']}>
        {/*title*/}
        <span className={c['card__title-light']}>We're</span> coming soon
      </h1>
      <p className={c['card__paragraph']}>{paragraph}</p>
      <EmailField
        handleEmail={handleEmail}
        handleSubmit={handleSubmit}
        value={email}
      />
    </article>
  );
};

export default Card;
