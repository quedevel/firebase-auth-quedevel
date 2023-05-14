import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function EventPage() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login?returnUrl=/event')
        } else {
            setLoading(false)
        }
    }, [user, loading, navigate])

    return (
        <>
            {user &&
                <Card style={{width: '18rem'}}>
                    {user.displayName && <Card.Header>{user.displayName}</Card.Header>}
                <ListGroup variant="flush">
                    <ListGroup.Item>{user.email}</ListGroup.Item>
                </ListGroup>
            </Card>}
        </>
    )
}
