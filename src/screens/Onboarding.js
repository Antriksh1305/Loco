import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// navigation
import { navigate } from '../navigators/Root';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

// assets
import { fonts } from '../../assets/fonts';
import { images } from '../../assets/images';

// components
import Button from '../components/button';

const Onboarding = () => {
    return (
        <View style={styles.main}>
            <View style={styles.subCont1}>
                <View style={styles.AppNameBox}>
                    <Text style={styles.AppNameTxt}>Loco</Text>
                    <Text style={styles.AppDescTxt}>Track your location in real-time with Loco.</Text>
                </View>
                <View>
                    <Image source={images.Onboarding} style={styles.OnboardingImage} />
                </View>
            </View>
            <View style={styles.subCont2}>
                <Button title={'Sign up'} styleBox={styles.btnBox} styleTxt={styles.btnTxt} onPress={() => {
                    navigate('Signup');
                }} />
                <View style={styles.LoginBox}>
                    <Text style={styles.LoginTxt1}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigate('Login');
                    }}>
                        <Text style={styles.LoginTxt2}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = {
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    subCont1: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height / 15.86,
    },
    subCont2: {
        position: 'absolute',
        bottom: height / 14.42,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AppNameBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    AppNameTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 10.86,
        color: Colors.secondary,
        paddingBottom: width / 39.1,
    },
    AppDescTxt: {
        fontFamily: fonts.regular,
        fontSize: width / 26.06,
        color: Colors.text,
    },
    OnboardingImage: {
        width: width,
        height: width * 0.83,
    },
    btnBox: {
        backgroundColor: Colors.secondary,
        width: width / 1.143,
        height: width / 6.62,
        borderRadius: width / 16.29,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 23,
        color: Colors.primary,
    },
    LoginBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 19.55,
    },
    LoginTxt1: {
        fontFamily: fonts.regular,
        fontSize: width / 26.06,
        color: Colors.text,
    },
    LoginTxt2: {
        fontFamily: fonts.bold,
        fontSize: width / 26.06,
        color: Colors.text,
        marginLeft: 6,
    },
};

export default Onboarding;
