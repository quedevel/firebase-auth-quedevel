import React, {useEffect} from "react"
import "firebase/app"
import Login from "../components/Login";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

export default function LoginPage(){
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const returnUrl = queryParams.get('returnUrl') || '/'

    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(user) navigate(returnUrl)
    }, [user, navigate, returnUrl])

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
                <Login/>
            </div>
        </div>
    )
}
