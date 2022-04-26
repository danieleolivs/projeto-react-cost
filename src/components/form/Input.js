import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, Value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type}  name={name} placeholder={placeholder} onChange = {handleOnChange} value={Value} />
        </div>
    )
}

export default Input