import React, { useContext } from 'react'
import Context from '../Context/Context'
import { NavLink, useHistory } from 'react-router-dom'
const Navbar = () => {
  const auth = useContext(Context)
  const history = useHistory()

  const logoutHandler = (event) => {
    event.preventDefault()
    localStorage.removeItem("userData")
    history.go('/login')
  }

  return (
    <ul class="navbar navbar-dark bg-primary nav justify-content-end">
      <li class="nav-item">
        <NavLink to="/contacts" className="nav-link link" href="#">Контакты</NavLink>
      </li>
      <li class="nav-item">
        <a href="/login" onClick={logoutHandler} className="nav-link link" href="#">Выйти</a>
      </li>
    </ul>

  )
}

export default Navbar