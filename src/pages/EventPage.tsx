import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function EventPage() {
    const { user, providerData } = useAuth()
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
            {user && providerData &&
                <Card style={{width: '18rem'}}>
                    {providerData.providerId &&
                        <Card.Header>{providerData.providerId}</Card.Header>}
                <ListGroup variant="flush">
                    {providerData.photoURL && <img src={providerData.photoURL}  alt={providerData.email}/> }
                    {providerData.displayName && <ListGroup.Item>displayName: {providerData.displayName}</ListGroup.Item>}
                    {providerData.email && <ListGroup.Item>email: {providerData.email}</ListGroup.Item>}
                </ListGroup>
            </Card>}
        </>
    )
}
