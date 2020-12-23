import React, { useReducer, useEffect } from 'react'
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
  console.log("auth person=", person)
  const isAuth = !!person.login
  const routes = useRouter(isAuth)
  useEffect(() => {
    const data = localStorage.getItem('userData')
    if (data) {
      authUser(data)
    }
  }, [])

  return (
    <Context.Provider value={{ authUser, login }}>

      <Router>
        <Navbar />
        <div className="App">
          {routes}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
