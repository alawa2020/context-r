import React, { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import AppRouter from './routers/AppRouter';

const AppContext = () => {
  const [user, setUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};

export default AppContext;
