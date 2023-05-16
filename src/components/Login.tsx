import React from "react";
import Button from "react-bootstrap/Button";
import AuthService from "../service/auth.service";

export default function Login(){
    const authService = new AuthService();
    return (
        <>
            <h1 className='text-center'>Login</h1>
            <Button
                className="mt-2"
                variant="danger"
                onClick={() => authService.login('google')}>
                Sign In with Google
            </Button>
            <Button
                className="mt-2"
                variant="dark"
                onClick={() => authService.login('github')}>
                Sign In with GitHub
            </Button>
        </>
    )
}