import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Navigator
import StackNavigation from './src/navigators/StackNavigation';
import Home from './src/screens/Home';

// Context
import User from './src/context/user';

const App = () => {
  const [user, setUser] = React.useState({});
  return (
    <User.Provider value={[user, setUser]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <StackNavigation />
        {/* <Home /> */}
      </SafeAreaView>
    </User.Provider>
  );
};

export default App;
