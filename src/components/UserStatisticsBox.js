import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// assets
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width } from '../constants/screen';

const StatisticsBox = ({ image, title, count }) => {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
            <View style={styles.content}>
                <Image source={image} style={styles.icon} />
                <Text style={styles.text}>{title}</Text>
            </View>
            <Text style={styles.number}>{count}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: width / 1.143,
        height: width / 6.512,
        marginBottom: width / 19.55,
        borderRadius: width / 16.29,
        shadowColor: '#000',
        elevation: 5,
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width / 19.55,
        borderRadius: width / 16.29,
        borderWidth: 0,
        backgroundColor: Colors.primary,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: width / 21.72,
        height: width / 21.72,
        marginRight: width / 21.72,
    },
    text: {
        fontFamily: fonts.medium,
        fontSize: width / 24.4375,
        color: Colors.text,
    },
    number: {
        fontFamily: fonts.medium,
        fontSize: width / 19.55,
        color: Colors.text,
    },
});

export default StatisticsBox;
