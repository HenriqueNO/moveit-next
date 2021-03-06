import styles from '../styles/components/BarTime.module.css'

interface BartTimeProps {
    BarPercentage: number,
}

export function BarTime(props: BartTimeProps) {

    console.log(props)
    return (
        <div className={styles.container}>
        <div>
            <div style={{width: `${props.BarPercentage}%`}} />
        </div>
        </div>
    )
}