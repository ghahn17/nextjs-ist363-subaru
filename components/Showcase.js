import { scroller }
 from 'react-scroll';

 import Image from 'next/image';
import styles from './showcase.module.scss';
import Heading from './Heading';
import Button from './Button';
const Showcase = ({ featuredImage, subtitle, title }) => {
    return <section className={styles.showcase}>
           {featuredImage && 
        <Image
            src= {featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width= {featuredImage.node.mediaDetails.width}
            height = {featuredImage.node.mediaDetails.height}
            className={styles.showcase__image}
        /> 
        }
        <div className={styles.showcase__gradient}></div>
       <div className={styles.showcase__text}>
            <Heading level={3} color="white" margin-bottom={1}>2024 {subtitle}</Heading>
            <Heading level={1} color="white" margin-bottom={2}>{title} </Heading>
            <Button 
            type="primary"
            clickHandler={() => {
                scroller.scrollTo("main-content", {
                    duration:800,
                    delay:0,
                    smooth: true
                })
            }}
            >
            Learn More</Button>
       </div>
        
    </section>

}
export default Showcase;