import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import User from '../context/user';

// functions
import { signup } from '../functions/auth/signup';

const Signup = () => {
    const [user, setUser] = useContext(User);

    return (
        <View>
            <Text>Signup</Text>
            <Button title="Create an account" onPress={() => {
                console.log('Create an account');
                signup();
            }} />
        </View>
    );
};

export default Signup;
