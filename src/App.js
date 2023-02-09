import { useContext } from "react";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { AuthPage } from './pages/Authentication/AuthPage';
import { AuthContext } from "./context/AuthContext";
import './App.css';
import { Discourse } from "./components/Discourse/Discourse";

function App() {
  
  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({children}) =>{
    return currentUser? children : <Navigate to="/authpage"/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/authpage" element={<AuthPage/>}/>
          <Route 
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
              }/>
          <Route 
            path="/discourse"
            element={
              <RequireAuth>
                <Discourse />
              </RequireAuth>
              }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
