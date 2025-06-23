import styles from './loading.module.css'

export default function MealsLoadingPage(){
    return(
        <h2 className={styles.loading}>Fetching meals...</h2>
    )
}