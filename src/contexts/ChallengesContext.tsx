import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'
import { isMobile } from 'react-device-detect'
import axios from 'axios'

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number,
}

interface ChallengesContextData {
    level: number,
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
    level: number,
    currentExperience: number,
    challengesCompleted: number
    user: object,
    totalExperience: number,
}

export const ChallengesContext = createContext({} as ChallengesContextData) 

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [level, setMyLevel] = useState(rest.level)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted)
    const [totalExperience, setTotalExperience] = useState(rest.totalExperience)
    
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])
    
    useEffect(() => {
        axios.post('/api/data', {...rest.user, level, currentExperience, challengesCompleted, totalExperience})
    }, [challengesCompleted])

    function levelUp() {
      setMyLevel(level + 1)
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
        setTotalExperience(totalExperience + amount)

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
    }

    return(
        <ChallengesContext.Provider value={{ level,
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