import styles from './formgroup.module.scss';
const FormGroup =({children}) => {
    return <div className={styles.FormGroup}>{children}</div>
}
export default FormGroup;