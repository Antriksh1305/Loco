import React from 'react';
import { View, TextInput } from 'react-native';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width } from '../constants/screen';

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
        marginBottom: width / 19.55,
        width: '100%',
        height: width / 7.82,
        backgroundColor: Colors.input,
        borderColor: Colors.grayborder,
        borderWidth: 1,
        borderRadius: width / 16.29,
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: width / 24.4375,
        fontFamily: fonts.medium,
        paddingHorizontal: width / 19.55,
    },
};

export default Input;
