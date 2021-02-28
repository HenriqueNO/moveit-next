import styles from '../styles/components/MenuAside.module.css'

export function MenuAside() {
    return (
        <div className={styles.container}>
            <button type="button"><img src="/icons/close.svg" alt="fechar"/></button>
            <button type='button' className={styles.buttonHome}><img src="/icons/home.svg" alt="home"/></button>
            <button type='button'><img src="/icons/ranking.svg" alt="leaderboard"/></button>
            <button type='button'><img src="/icons/sol.svg" alt="Sol"/></button>
        </div>
    )
}