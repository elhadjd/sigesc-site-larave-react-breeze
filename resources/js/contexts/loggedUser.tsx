import { User } from "firebase/auth";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface LoggedUserData{
    user: User,
    setUser: (value: User)=>void
}

interface UserLoggedProviderProps{
    children: ReactNode
}

const loggedUserContext = createContext<LoggedUserData |undefined>()

export const useLoggedUser = ()=>{
    const context = useContext(loggedUserContext)
    if (!context){
        throw new Error('useFormState deve ser usado dentro de um FormStateProvider')
    }
    return context
}

export const UserLoggedProvider:React.FC<UserLoggedProviderProps> = ({children})=>{
    const [user,setUser] = useState<User>()
    return (
        <loggedUserContext.Provider value={{user,setUser}}>
            {children}
        </loggedUserContext.Provider>
    )
}