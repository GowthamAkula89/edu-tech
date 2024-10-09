import React from 'react';
import { useAuth } from '../Utils/authContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Welcome, {user?.displayName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
