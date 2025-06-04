import i from './Illustration.module.scss'

const Illustration = () => {
  return (
    <figure className={i.illustration}>
      <img className={i['illustration__img']} src="images/hero-mobile.webp" alt="Photo" />
    </figure>
  );
}

export default Illustration;