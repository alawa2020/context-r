import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      {!!Object.keys(user).length && (
        <button onClick={handleLogout} className="btn btn-danger mb-3">
          Logout
        </button>
      )}

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default AboutScreen;
