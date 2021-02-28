import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'
import { isMobile } from 'react-device-detect'

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number,
}

interface ChallengesContextData {
    myLevel: number,
    currentExperience: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    completeChallenge: () => void,
    resetChallenge: () => void,
    closeLevelUpModal: () => void,
}

interface ChallengesProviderProps {
    children: ReactNode,
    myLevel: number,
    currentExperience: number,
    challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData) 

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [myLevel, setMyLevel] = useState(rest.myLevel)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted)

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((myLevel + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])
    
    useEffect(() => {
        Cookies.set('myLevel', String(myLevel))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [myLevel, currentExperience, challengesCompleted])
    
    function levelUp() {
      setMyLevel(myLevel + 1)
      setIsLevelModalOpen(true)
    }

    function closeLevelUpModal() {
        setIsLevelModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()
        
        if (Notification.permission === 'granted') {
            new Notification("Novo Desafio ", {
                body: `Valendo ${challenge.amount}xp!`
            })
        }

        if (!isMobile && Notification.permission === 'granted') {
            new Notification("Novo Desafio", {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
    }

    return(
        <ChallengesContext.Provider value={{ myLevel,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        completeChallenge,
        resetChallenge,
        closeLevelUpModal,
        }}>
            {children}

            { isLevelModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}