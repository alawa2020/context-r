import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const AboutScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <button className="btn btn-danger mb-3">Logout</button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default AboutScreen;
