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

type GitHubUserType = {
    login: string,
    html_url: string,
    email: string,
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
            if (providerData && providerData.providerId === 'github.com') {
                /* GitHub은 이메일을 주지 않기 때문에 API를 통해서 username을 가져오도록 한다. */
                getGitHubUserData(providerData.uid).then((res: GitHubUserType) => {
                    setProviderData({
                        ...providerData,
                        displayName: res.login
                    })
                })
            }
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

async function getGitHubUserData(githubIdOrLogin: string) {
    const header = {headers: {'Accept': 'application/json'}}
    const apiUrl = `https://api.github.com/user/${githubIdOrLogin}`
    return fetch(apiUrl, header)
        .then((res) => {
            if (!res.ok) {
                const err = new Error()
                // TODO res.status 값에 따라 오류 메세지 처리 ( 구찮으니 일단 패쓰 )
                return Promise.reject(err)
            }
            return res.json()
        })
}