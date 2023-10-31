import Swatches from './Swatches';
import { useState } from 'react';

const colors = [
    "red", "orange", "yellow"
]

const CarColorPicker = () => {
    // state variable and a set state function name inside sq brackets
    const [activeColor, setActiveColor] = useState ("red");
    return <section>
        <div
        style={{ backgroundColor: activeColor}}
        >
        Large car image goes here 
             </div>
        <Swatches data={colors} 
        changeHandler={setActiveColor}
        /> 
        <h3>{activeColor}</h3>
        
    </section>
}
export default CarColorPicker; 