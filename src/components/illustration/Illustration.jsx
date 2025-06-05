import i from './Illustration.module.scss';

const Illustration = () => {
  return (
    <figure className={i.illustration}>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="images/hero-desktop.webp"
          type="image/webp"
        />
        <img
          className={i['illustration__img']}
          src="images/hero-mobile.webp"
          alt="Illustration"
        />
      </picture>
    </figure>
  );
};

export default Illustration;
