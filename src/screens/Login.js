import React, { useContext } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import User from '../context/user';

// functions
import { login } from '../functions/auth/login';

const Login = () => {
    const [user, setUser] = useContext(User);
    return (
        <View>
            <Text>Login</Text>
            <Button title="Press" onPress={() => {
                login();
            }} />
        </View>
    );
};

export default Login;
