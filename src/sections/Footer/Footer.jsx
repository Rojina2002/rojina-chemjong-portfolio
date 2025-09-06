import styles from './FooterStyles.module.css';
import footer_logo from '../../assets/logo.png';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <hr />

      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.footerTopLeft}>
          <img src={footer_logo} alt="Logo" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>
          &copy; 2025. Rojina Chemjong — rojina.chj@gmail.com - +1 (416)-995-0371 
        </p>
      </div>
    </section>
  );
}

export default Footer;
