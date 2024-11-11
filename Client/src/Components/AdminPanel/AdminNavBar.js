import React, { useState, useEffect } from 'react';
import {useLogout} from '../../hooks/useLogout'

function AdminNavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const {logout} = useLogout()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    window.location.reload()
    await logout()
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Admin Panel</div>
      <div className="navbar-time">{currentTime.toLocaleString()}</div>
      <h3 className='logout-btn' onClick={handleLogout}>Logout</h3>
    </nav>
  );
}

export default AdminNavBar;
