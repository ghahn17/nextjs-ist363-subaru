import Button from './Button'
import styles from './action.module.scss';
import Heading from './heading';
const Action = ({ vehicleTitle }) => {
    const handleBuildPriceClick = () => {
        window.location.href = '/build-price'; 
      };
      const handleContactDealerClick = () => {
        window.location.href = '/contact'; 
      };
    
return <section>
    <section className={styles.action}>
    <Heading level={2} textAlign="center" padding-top={2} color="white">Get Behind the Wheel</Heading>
  <p className={styles.action__call}>Start customizing your {vehicleTitle} today, or contact your local Subaru dealer to experience one in person.</p>
  <div className={styles.action__btns}>
          <Button type="build" clickHandler={handleBuildPriceClick}>
            Build & Price
          </Button>
          <Button type="contact" clickHandler={handleContactDealerClick}>
            Contact Dealer
          </Button>
        </div>
</section>
</section>
}
export default Action;
