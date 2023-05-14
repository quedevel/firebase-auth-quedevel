import { useRouteError } from "react-router-dom"
import Alert from 'react-bootstrap/Alert'

type ErrorObject = {
    statusText: string
    message: string
}

export default function ErrorPage() {
    const error = useRouteError() as ErrorObject
    return (
        <div id="error-page" className="container min-vh-100 d-flex align-items-center justify-content-center">
            <Alert variant="danger">
                <Alert.Heading>Oops!</Alert.Heading>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Alert>
        </div>
    )
}