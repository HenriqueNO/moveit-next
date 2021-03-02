import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ReturnToIndexContextData {
    returnIndex: () => void;
}

interface ReturnToIndexProviderProps {
    children: ReactNode
}

export const ReturnToIndexContext = createContext({} as ReturnToIndexContextData)

export function ReturnToIndexProvider({children}: ReturnToIndexProviderProps) {
    const [ returnToIndex, setReturnToIndex] = useState(false)
    const Router = useRouter()

    function returnIndex() {
        setReturnToIndex(true)
      }
    
    useEffect(() => {
    Router.push('/')
    setReturnToIndex(false)
    }, [returnToIndex])

    return (
        <ReturnToIndexContext.Provider value={{
            returnIndex,
        }}>
            {children}
        </ReturnToIndexContext.Provider>
    )
}