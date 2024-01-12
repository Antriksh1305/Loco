import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Navigator
import StackNavigation from './src/navigators/StackNavigation';

// Context
import User from './src/context/user';
import { Colors } from './src/constants/colors';

const App = () => {
  const [user, setUser] = React.useState({});
  return (
    <User.Provider value={[user, setUser]}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <StackNavigation />
    </User.Provider>
  );
};

export default App;
