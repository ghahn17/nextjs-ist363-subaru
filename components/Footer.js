import styles from './footer.module.scss';
import Row from './Row';
import Nav from './Nav';
const Footer = () => {
    return <footer className={styles.footer}>
         <Row>

            <Nav.Social />


        </Row>


    </footer>
}
export default Footer;