import React, {useContext, useState, useEffect, ReactNode} from "react";
import { auth } from "../firebase.config";
import { User } from "firebase/auth";

type AuthContextProps = {
    user: User | null;
}

type AuthProviderProps = {
    children: ReactNode;
}

const AuthContext = React.createContext<AuthContextProps>({
    user: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
    }, [user]);

    const value: AuthContextProps = { user };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};