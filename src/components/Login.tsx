import React from "react";
import Button from "react-bootstrap/Button";
import {GithubAuthProvider, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {auth} from "../firebase.config";

export default function Login(){
    return (
        <>
            <h1 className='text-center'>Login</h1>
            <Button
                className="mt-2"
                variant="danger"
                onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}>
                Sign In with Google
            </Button>
            <Button
                className="mt-2"
                variant="dark"
                onClick={() => signInWithRedirect(auth, new GithubAuthProvider())}>
                Sign In with GitHub
            </Button>
        </>
    )
}