import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// assets
import { images } from '../../assets/images';
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

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
        width: 342,
        height: 60,
        marginBottom: 20,
        borderRadius: 24,
        shadowColor: '#000',
        elevation: 5,
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 24,
        borderWidth: 0,
        backgroundColor: Colors.primary,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 18,
    },
    text: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: Colors.text,
    },
    number: {
        fontFamily: fonts.medium,
        fontSize: 20,
        color: Colors.text,
    },
});

export default StatisticsBox;
