import React, {useContext, useState, useEffect, ReactNode} from "react"
import { auth } from "../firebase.config"
import { User } from "firebase/auth"

type ProviderDataType = {
    displayName: string
    email: string
    phoneNumber: string
    photoURL: string
    providerId: string
    uid: string
}
type AuthContextProps = { user: User | null, providerData: ProviderDataType | null}
type AuthProviderProps = { children: ReactNode }

const AuthContext = React.createContext<AuthContextProps>({
    user: null,
    providerData: null,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | null>(null)
    const [providerData, setProviderData] = useState<ProviderDataType | null>(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setProviderData(user?.providerData[0] as ProviderDataType)
            setLoading(false)
        })
    }, [user])

    const value: AuthContextProps = { user, providerData }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}