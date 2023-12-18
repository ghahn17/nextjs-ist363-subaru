import { getFooterSocialLinks } from '../lib/nav';
import styles from './footer.module.scss'; // Import your styles

const FooterSocials = () => {
    const socialLinks = getFooterSocialLinks();

    return (
        <nav className={styles.footer__socials}>
            {socialLinks.map((link, index) => (
                <a href={link.url} key={index} className={styles.social__links}>
                    <img src={link.icon} alt={`Social Icon ${index}`} />
                </a>
            ))}
        </nav>
    );
};

export default FooterSocials;





