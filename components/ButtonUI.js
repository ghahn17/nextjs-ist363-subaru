import Image from 'next/image';
import styles from './btnui.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const ButtonUI = ({clickHandler, icon}) => {
const btnClasses = cx ({
    btnui: true,
    close: icon === 'close'
});
return <button 
    className={btnClasses}
    onClick={clickHandler}
    >
    <Image
        src={`/images/icons/${icon}.svg`}
        alt={`${icon} icon`}
        width={16}
        height={12}

    />
</button>
}
export default ButtonUI;