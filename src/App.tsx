import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
        <Navigation />
        <div id="detail">
          <Outlet />
        </div>
      </>
  );
}

export default App;
