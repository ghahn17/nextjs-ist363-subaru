import { useState } from 'react';
import styles from './colorpicker.module.scss'
import Swatches from './Swatches';
import Image from 'next/image';
import Heading from './heading';
  
const CarColorPicker = ({ colors }) => {
    // state variable and a set state function name inside sq brackets
    const [activeColor, setActiveColor] = useState (0);
    return <section className={styles.colorpicker}>
       <Heading level={2} textAlign="center">Pick a color</Heading>
       <Image 
       src={colors[activeColor].image.node.sourceUrl}
       alt={colors[activeColor].image.node.altText}
       width={colors[activeColor].image.node.mediaDetails.width}
       height={colors[activeColor].image.node.mediaDetails.height}
       className={styles.colorpicker__image}
       />
       <Swatches 
       colors={colors}
       setActiveColor={setActiveColor} 
       activeColor={activeColor}
       />
       <Heading level={3} textAlign="center" marginBottom={4} marginTop={4}>{colors[activeColor].swatch.edges[0].node.name}</Heading>
    </section>
}
export default CarColorPicker; 