import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// navigation
import { navigate } from '../navigators/Root';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width } from '../constants/screen';

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
        marginBottom: 50,
    },
    subCont2: {
        position: 'absolute',
        bottom: 55,
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
        fontSize: 36,
        color: Colors.secondary,
        paddingBottom: 10,
    },
    AppDescTxt: {
        fontFamily: fonts.regular,
        fontSize: 15,
        color: Colors.text,
    },
    OnboardingImage: {
        width: width,
        height: width * 0.83,
    },
    btnBox: {
        backgroundColor: Colors.secondary,
        width: 342,
        height: 59,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        fontFamily: fonts.bold,
        fontSize: 17,
        color: Colors.primary,
    },
    LoginBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    LoginTxt1: {
        fontFamily: fonts.regular,
        fontSize: 15,
        color: Colors.text,
    },
    LoginTxt2: {
        fontFamily: fonts.bold,
        fontSize: 15,
        color: Colors.text,
        marginLeft: 6,
    },
};

export default Onboarding;
