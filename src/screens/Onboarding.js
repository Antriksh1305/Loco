import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import User from '../context/user';

// navigation
import { navigate } from '../navigators/Root';

const Onboarding = () => {
    const [user, setUser] = useContext(User);
    return (
        <View>
            <Text>Onboarding</Text>
            <Button title="Login" onPress={() => {
                navigate('Login');
            }}/>
            <Text />
            <Button title="Signup" onPress={() => {
                navigate('Signup');
            }}/>
        </View>
    );
};

export default Onboarding;
