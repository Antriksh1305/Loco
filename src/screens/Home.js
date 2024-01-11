import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import User from '../context/user';

const Home = () => {
    const [user, setUser] = useContext(User);
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;
