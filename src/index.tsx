import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import reportWebVitals from './reportWebVitals'
import { AuthProvider } from "./contexts/AuthContext"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage/> },
            { path: "/event", element: <AuthProvider><EventPage /></AuthProvider> },
            { path: "/login", element: <LoginPage/> },
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

reportWebVitals()
