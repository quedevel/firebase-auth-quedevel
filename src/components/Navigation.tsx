import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase.config"

export default function Navigation() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => await auth.signOut()

    useEffect(() => {
        if (!user) return
        setLoading(false)
    }, [user, loading])

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/event">Event</Nav.Link>
                        {!user && <Nav.Link href="/login">Login</Nav.Link>}
                        {user && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
