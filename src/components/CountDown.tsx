import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
    return (
        <div>
            {hasFinished ? (<div className={`${styles.countdownContainer} 
                ${styles.countdownContainerDisabled}`}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>) : (
                <div className={styles.countdownContainer}>
                    <div>
                        <span>{minuteLeft}</span>
                        <span>{minuteRight}</span>
                    </div>
                    <span>:</span>
                    <div>
                        <span>{secondLeft}</span>
                        <span>{secondRight}</span>
                    </div>
                </div>
            )}
            

            { hasFinished ? (
                <button disabled className={styles.countdownButton}>
                 Ciclo encerrado
                </button>
            ): (
                <>
                    {isActive? (
                        <>
                            <button 
                                type='button' 
                                className={
                                    `${styles.countdownButton}
                                    ${styles.countdownButtonActive}`
                                } 
                                onClick={resetCountdown}
                            >
                                Abandonar o ciclo
                            </button>
                        </>
                    ): (
                        <button 
                            type='button' 
                            className={styles.countdownButton} 
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
            
        </div>
    )
}