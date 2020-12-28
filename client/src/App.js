import React, { useEffect, useState } from 'react'
import './App.css';
import { useRouter } from './Router'
import { BrowserRouter as Router } from 'react-router-dom'
import Context from './Context/Context'
import Navbar from './Components/Navbar'
import { useAuth } from './Hooks/auth.hooks';

function App() {
  const { authUser, login, person, setState } = useAuth()
  const [status, setStatus] = useState(false)
  const isAuth = !!person.login

  useEffect(() => {
    const data = localStorage.getItem('userData')
    if (data) {
      setStatus(true)
    }
  }, [])
  const routes = useRouter(isAuth || status)
  return (
    <Context.Provider value={{ authUser, login, person, setState }}>
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
