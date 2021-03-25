import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucceed() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <>
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Icone-simbolizando-força"/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                </div>
                    <footer>
                        <button type='button' className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed} >
                            Mamei
                        </button>

                        <button type='button' className={styles.challengeSucceedButton} 
                        onClick={handleChallengeSucceed}>
                            Botei pra mamar
                        </button>
                    </footer>
                </>
            ) : (
                <div className={styles.challengeBoxNotActive}>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    <div>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>Avance de level completando desafios.</p>
                    </div>
                </div>
            )}
        </div>
    )
}