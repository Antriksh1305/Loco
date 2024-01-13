import React, { useContext } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import User from '../context/user';

// functions
import { handleSubmit } from '../functions/auth/signup';
import { handleCameraLaunch } from '../functions/signup/camera';
import { openImagePicker } from '../functions/signup/imagePicker';

// assets
import { images } from '../../assets/images';
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

// components
import Button from '../components/button';
import Input from '../components/input';

const Signup = () => {
    console.log(width, height);
    const [userToken, setUserToken] = useContext(User);
    const [user, setUser] = React.useState({
        'name': '',
        'email': '',
        'password': '',
        'age': '',
        'profile_picture': '',
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const Arr = [
        { 'value': user.name, 'onChangeText': (text) => setUser({ ...user, name: text }) ,'placeholder': 'Name', 'secureTextEntry': false},
        { 'value': user.email, 'onChangeText': (text) => setUser({ ...user, email: text }) ,'placeholder': 'Email', 'secureTextEntry': false},
        { 'value': user.password, 'onChangeText': (text) => setUser({ ...user, password: text }) ,'placeholder': 'Password', 'secureTextEntry': true},
        { 'value': user.age, 'onChangeText': (text) => setUser({ ...user, age: text }) ,'placeholder': 'Age', 'secureTextEntry': false},
    ];

    return (
        <View style={styles.main}>
            <View style={styles.upperCont}>
                <Image source={images.Scenery} style={styles.SceneryImage} />
            </View>
            <View style={styles.BottomSheet}>
                <View style={styles.holder} />
                <View>
                    <View>
                        <Text style={styles.SignupTxt}>Signup</Text>
                    </View>
                    <View style={styles.ProfileBox}>
                        <View style={styles.AvatarImgBox}>
                            <Image source={user.profile_picture ? { uri: user.profile_picture } : images.avatar} style={styles.AvatarImg} />
                        </View>
                        <View style={styles.ProfileBoxBtns}>
                            <View>
                                <Text style={styles.ProfilePicHeadingTxt}>Profile Picture</Text>
                            </View>
                            <View style={styles.CameraBtnBox}>
                                <Button title={'Take Picture'} styleBox={styles.camPressBox} styleTxt={styles.camPressTxt} onPress={() => {
                                    handleCameraLaunch({ user, setUser });
                                }} />
                                <Button title={'Upload'} styleBox={styles.camPressBox} styleTxt={styles.camPressTxt} onPress={() => {
                                    openImagePicker({ user, setUser });
                                }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        {
                            Arr.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Input value={item.value} onChangeText={item.onChangeText} placeholder={item.placeholder} secureTextEntry={item.secureTextEntry} />
                                    </View>
                                );
                            })
                        }
                    </View>
                    <View style={styles.BtnContainer}>
                        {isSubmitting ? (
                            <ActivityIndicator size="large" color={Colors.secondary} style={styles.Spinner} />
                        ) : (
                            // Show the button when not submitting
                            <Button title={'Create Account'} styleBox={styles.btnBox} styleTxt={styles.btnTxt} onPress={() => {
                                handleSubmit({ user, setIsSubmitting, setUserToken });
                            }} />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = {
    main: {
        flex: 1,
    },
    upperCont: {
        flex: 1,
    },
    SceneryImage: {
        width: width,
        height: height / 3.027,
    },
    BottomSheet: {
        marginTop: width / 13.03,
        height: height * 0.75,
        borderTopLeftRadius: width / 13.03,
        borderTopRightRadius: width / 13.03,
        paddingHorizontal: width / 15.64,
        backgroundColor: Colors.primary,
    },
    holder: {
        height: width / 78.2,
        width: width / 9.31,
        borderRadius: width / 195.5,
        alignSelf: 'center',
        backgroundColor: Colors.gray,
        marginVertical: width / 19.55,
    },
    SignupTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 15.038,
        color: Colors.text,
        paddingBottom: width / 19.55,
    },
    ProfileBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: width / 19.55,
    },
    AvatarImg: {
        width: width * 0.179,
        height: width * 0.179,
        borderRadius: width * 0.1023,
    },
    ProfileBoxBtns: {
        flex: 1,
        marginLeft: width / 19.55,
    },
    ProfilePicHeadingTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 21.72,
        color: Colors.text,
        paddingBottom: width / 39.1,
    },
    CameraBtnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    camPressBox: {
        backgroundColor: Colors.grayborder,
        width: width / 3.26,
        height: width / 9.775,
        borderRadius: width / 65.17,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: width / 39.1,
        shadowColor: Colors.text,
        shadowOpacity: 0.16,
        elevation: 2.5,
    },
    camPressTxt: {
        fontFamily: fonts.regular,
        fontSize: width / 24.4375,
        color: Colors.text,
    },
    Spinner: {
        marginTop: width / 19.55,
    },
    btnBox: {
        width: width / 1.143,
        height: width / 7.82,
        borderRadius: width / 16.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 19.55,
        backgroundColor: Colors.secondary,
    },
    btnTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 23,
        color: Colors.primary,
    },
};

export default Signup;
