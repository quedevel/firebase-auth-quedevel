import React, {useEffect} from "react"
import Button from 'react-bootstrap/Button'
import {useLocation, useNavigate} from 'react-router-dom'
import "firebase/app"
import {signInWithRedirect, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"
import { auth } from "../firebase.config"
import {useAuth} from "../contexts/AuthContext"

export default function LoginPage(){
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const returnUrl = queryParams.get('returnUrl') || '/'

    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate(returnUrl)
    }, [user, navigate, returnUrl])

    return (
        <div>
            <Button
                variant="danger"
                onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}>
                Sign In with Google
            </Button>
            <br/>
            <Button
                className="mt-2"
                variant="dark"
                onClick={() => signInWithRedirect(auth, new GithubAuthProvider())}>
                Sign In with GitHub
            </Button>
        </div>
    )
}
