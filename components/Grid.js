import Heading from './Heading'
import { motion } from "framer-motion" 
import Image from 'next/Image';
import Link from 'next/link';
import Paragraph from  './Paragraph.js';
import styles from './grid.module.scss';

const Grid = ({ items }) => {
    const sectionVariants= {
        closed: {
            opacity:0
        },
        open: {
            opacity:1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const articleVariants ={ 
        closed: {
            y: 50,
            opacity:0
        },
        open: {
            y:0,
            opacity:1
        }
    }
    return <motion.section 
        initial="closed"
        animate="open"
        variants={sectionVariants}
        className={styles.grid}
        >
        {items.map((item, index)=>{
            const {title, slug, vehicleInformation} = item.node;
            const { trimLevels } = vehicleInformation;
            return <motion.article 
                key = {index}
                variants={articleVariants}
                >
                {trimLevels && trimLevels[0].images.thumbnail && 
                <Image 
                    src= {trimLevels [0].images.thumbnail.node.sourceUrl}
                    alt={trimLevels [0].images.thumbnail.node.altText}
                    width={trimLevels [0].images.thumbnail.node.mediaDetails.width}
                    height={trimLevels [0].images.thumbnail.node.mediaDetails.height}
                />
                }
                <Heading 
                level={3} 
                color="red"> 
                {title} 
                </Heading>
                <Paragraph>
                    Starting at $25,000
                </Paragraph>
                <Paragraph>
                    <Link href={`/vehicles/${slug}`}>Learn more</Link>
                </Paragraph>
            </motion.article>
        })}
    </motion.section>
}
export default Grid