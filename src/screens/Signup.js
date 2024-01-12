import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import User from '../context/user';

// functions
import { signup } from '../functions/auth/signUp';

const Signup = () => {
    const [user, setUser] = useContext(User);
    const [selectedImage, setSelectedImage] = React.useState(null);

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
