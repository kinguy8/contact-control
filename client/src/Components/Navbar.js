import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper cyan darken-2">
        <a href="#" class="brand-logo">ContactController</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to="/contacts">Контакты</NavLink></li>
          <li><NavLink to="/">Выйти</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar