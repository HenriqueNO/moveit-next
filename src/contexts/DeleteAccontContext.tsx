import { createContext, ReactNode, useState } from "react";
import { DeleteAccont } from "../components/DeleteAccont";

interface DeleteAccontContextData {
  DeleteModalOpen: () => void,
  DeleteModalClose: () => void,
}

interface DeleteAccontProviderProps {
  children: ReactNode,
}

export const DeleteAccontContext = createContext({} as DeleteAccontContextData)

export function DeleteAccontProvider ({ children }: DeleteAccontProviderProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  function DeleteModalOpen() {
    setIsDeleteModalOpen(true)
  }

  function DeleteModalClose() {
    setIsDeleteModalOpen(false)
  }

  return (
    <DeleteAccontContext.Provider value={{
      DeleteModalOpen,
      DeleteModalClose
    }}>
      {children}
      { isDeleteModalOpen && <DeleteAccont />}
    </DeleteAccontContext.Provider>
  )
}