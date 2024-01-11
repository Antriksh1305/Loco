import React from 'react';

// Navigator
import StackNavigation from './src/navigators/StackNavigation';

// Context
import User from './src/context/user';

const App = () => {
  const [user, setUser] = React.useState({});
  return (
    <User.Provider value={[user, setUser]}>
      <StackNavigation />
    </User.Provider>
  );
};

export default App;
