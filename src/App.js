import { useContext } from "react";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// Pages
import {Home} from "./pages/Home/Home";
import {Landing} from "./pages/Landing/Landing";
// Style
import './App.css';

function App() {
  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({children}) =>{
    return currentUser? children : <Navigate to="/landing"/>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing/>}/>
          <Route 
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
