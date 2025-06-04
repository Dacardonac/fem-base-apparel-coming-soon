import Illustration from '../illustration/Illustration';
import EmailField from '../emailField/EmailField';
import logo from '/images/logo.svg';
import c from './Card.module.scss'

const Card = ({ /*title,*/ paragraph }) => {
  return (
    <article className={c.card}>
      <figure className={c['card__logo']}>
        <img className={c['card__logo-svg']} src={logo} alt="Base Apparel Logo" />
      </figure>
      <Illustration />
      <h1 className={c['card__title']}>{/*title*/}<span className={c['card__title-light']}>We're</span> coming soon</h1>
      <p className={c['card__paragraph']}>{paragraph}</p>
      <EmailField />
    </article>
  );
};

export default Card;