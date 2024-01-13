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
        height: 262,
    },
    BottomSheet: {
        marginTop: 30,
        height: height * 0.75,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        backgroundColor: Colors.primary,
    },
    holder: {
        height: 5,
        width: 42,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: Colors.gray,
        marginVertical: 20,
    },
    SignupTxt: {
        fontFamily: fonts.bold,
        fontSize: 26,
        color: Colors.text,
        paddingBottom: 20,
    },
    ProfileBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    AvatarImg: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    ProfileBoxBtns: {
        flex: 1,
        marginLeft: 20,
    },
    ProfilePicHeadingTxt: {
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: Colors.text,
        paddingBottom: 10,
    },
    CameraBtnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    camPressBox: {
        backgroundColor: Colors.grayborder,
        width: 120,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: Colors.text,
        shadowOpacity: 0.16,
        elevation: 2.5,
    },
    camPressTxt: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: Colors.text,
    },
    Spinner: {
        marginTop: 20,
    },
    btnBox: {
        width: 342,
        height: 50,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: Colors.secondary,
    },
    btnTxt: {
        fontFamily: fonts.bold,
        fontSize: 17,
        color: Colors.primary,
    },
};

export default Signup;
