import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <h1>To Do List</h1>

        <Link to="/todo">To Do List</Link>
        <Link to="/gallery">Gallery</Link>
    </div>
  )
}
