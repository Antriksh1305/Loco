import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Navigator
import StackNavigation from './src/navigators/StackNavigation';

// Context
import User from './src/context/user';

const App = () => {
  const [userToken, setUserToken] = React.useState(null);
  return (
    <User.Provider value={[userToken, setUserToken]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <StackNavigation />
      </SafeAreaView>
    </User.Provider>
  );
};

export default App;
