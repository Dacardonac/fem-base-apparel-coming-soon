import f from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={f.footer}>
    <p class={f['footer__attribution']}>
      Challenge by <a className={f['footer__attribution-links']} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a className={f['footer__attribution-links']} href="https://github.com/Dacardonac" target="_blank">Daniel Alejandro Cano Cardona</a>.
    </p>
  </footer>
  );
}

export default Footer;