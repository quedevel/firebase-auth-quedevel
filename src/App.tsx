import Navigation from "./components/Navigation"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <AuthProvider>
        <Navigation />
        <div id="detail" className="container min-vh-100 d-flex align-items-center justify-content-center">
          <Outlet />
        </div>
      </AuthProvider>
  )
}

export default App
