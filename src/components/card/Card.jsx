import Swal from 'sweetalert2';
import '../../styles/utils/sweetAlert.scss';
import { useState } from 'react';
import Illustration from '../illustration/Illustration';
import EmailField from '../emailField/EmailField';
import logo from '/images/logo.svg';
import c from './Card.module.scss';

const Card = ({ /*title,*/ paragraph }) => {
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1150,
  timerProgressBar: true,
  customClass: {
    popup: 'custom-toast',
    icon: 'custom-icon'
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});



  const clearError = () => {
    setHasError(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      setHasError(true);
      await Toast.fire({
        icon: 'error',
        title: 'Error',
      });
    } else if (!regex.test(email)) {
      setHasError(true);
      await Toast.fire({
        icon: 'error',
        title: 'Please enter a valid email',
      });
    } else {
      setHasError(false);
      setEmail('');
      await Toast.fire({
        icon: 'success',
        title: 'Email sent!',
      });
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
      <div className={c['card__image-container']}>
      <Illustration />
    </div>
      
      <div className={c['card__content']}>
        <h1 className={c['card__title']}>
          {/*title*/}
          <span className={c['card__title-light']}>We're</span> coming soon
        </h1>
        <p className={c['card__paragraph']}>{paragraph}</p>
        <EmailField
          hasError={hasError}
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          value={email}
          clearError={clearError}
        />
      </div>
    </article>
  );
};

export default Card;
