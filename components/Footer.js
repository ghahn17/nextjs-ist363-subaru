import styles from './footer.module.scss';
import Row from './Row';
import FooterSocials from './FooterSocials';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <Row justifyContent="center">
            <p className={styles.connectText}>Connect with us</p>  
        </Row>

        <Row justifyContent="center"><FooterSocials /> </Row>
        

        <Row justifyContent="center">
            <p className={styles.copyText}>Copyright 2023 Subaru.</p>
        </Row>
      </footer>
    );
  }
  export default Footer;
  