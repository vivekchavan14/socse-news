import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice.js'; // Update the path accordingly
import userImg from './../../assets/user.jpg';
import { useState } from 'react';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    setShowModal(false); // Close the modal after logout
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>SoCSE Newsletter</Link>
        </div>

        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={userImg} className={classes.img} alt="User" />
          {showModal && (
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <Link to='/login' onClick={handleLogout}>
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
