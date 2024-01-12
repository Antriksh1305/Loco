import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const button = ({ title, styleBox, styleTxt, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={styleBox}
                onPress={onPress}>
                <View>
                    <Text style={styleTxt}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default button;
