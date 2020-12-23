import React, { useReducer, useEffect, useState} from 'react'
import './App.css';
import { contactState, personState } from './Constants/Constants'
import { useRouter } from './Router'
import Reducer from './Reducer'
import { BrowserRouter as Router } from 'react-router-dom'
import Context from './Context/Context'
import Navbar from './Components/Navbar'
import { useAuth } from './Hooks/auth.hooks';

function App() {
  const { authUser, login, person } = useAuth()
  const [status, setStatus] = useState(false)
  const isAuth = !!person.login
  
  useEffect(() =>{
    const data = localStorage.getItem('userData')
    if (data)
    {
      setStatus(true)
    }
  }, [])
  const routes = useRouter(isAuth || status)
  return (
    <Context.Provider value={{ authUser, login }}>
    
      <Router>
        {person.isAuth && <Navbar />}
        <div className="App">
          {routes}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
