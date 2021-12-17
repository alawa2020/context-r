import React, { useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';
import AppRouter from './routers/AppRouter';

const AppContext = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userContext')) || {},
  );

  useEffect(() => {
    localStorage.setItem('userContext', JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};

export default AppContext;
