import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAsync } from 'redax/auth/authOperations';
import { getUserName } from 'redax/auth/authSelectors';

function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(logOutAsync());
    }

  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default UserMenu;
