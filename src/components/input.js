import React from 'react';
import { View, TextInput } from 'react-native';

// constants
import { Colors } from '../constants/colors';

// assets
import { fonts } from '../../assets/fonts';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Colors.placeholder}
                secureTextEntry={secureTextEntry}
                autoComplete="password"
            />
        </View>
    );
};

const styles = {
    main: {
        marginBottom: 20,
        width: '100%',
        height: 50,
        backgroundColor: Colors.input,
        borderColor: Colors.grayborder,
        borderWidth: 1,
        borderRadius: 24,
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: 16,
        fontFamily: fonts.medium,
        paddingHorizontal: 20,
    },
};

export default Input;
