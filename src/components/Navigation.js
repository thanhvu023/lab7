import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="nav_header">
        <Link to="/dashboard" className="nav_item">Dash board</Link>
        <Link to="/add" className="nav_item">Add Player</Link>
    </div>
  )
}

export default Navigation