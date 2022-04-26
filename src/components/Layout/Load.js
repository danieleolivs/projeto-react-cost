import styles from './Load.module.css'
import loading from '../../img/loading.svg'

function Load(){
    return(
        <div className={styles.loader_container}>
            <img className = {styles.loader} src={loading} alt='loading' />
        </div>
    )
}

export default Load