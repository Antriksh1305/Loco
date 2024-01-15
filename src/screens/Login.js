import React, { useContext } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import User from '../context/user';
// functions
import { login } from '../functions/auth/login';

// assets
import { images } from '../../assets/images';
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

// components
import Button from '../components/button';
import Input from '../components/input';
import { SnackBar } from '../components/Snackbar';

const Login = () => {
    const [userToken, setUserToken] = useContext(User);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState('');

    const Arr = [
        { 'value': email, 'onChangeText': setEmail, 'placeholder': 'Email', 'secureTextEntry': false },
        { 'value': password, 'onChangeText': setPassword, 'placeholder': 'Password', 'secureTextEntry': true },
    ];

    return (
        <View style={styles.main}>
            <View style={styles.UpperCont}>
                <Image source={images.Scenery} style={styles.SceneryImage} />
            </View>
            <View style={styles.BottomSheet}>
                <View style={styles.holder} />
                <View>
                    <View style={styles.BtmSheetHeader}>
                        <View>
                            <Text style={styles.LoginTxt}>Login</Text>
                        </View>
                        <View>
                            <Image source={images.User} style={styles.Iconuser} />
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
                            <Button title={'Login'} styleBox={styles.btnBox} styleTxt={styles.btnTxt} onPress={() => {
                                login({ email, password, setIsSubmitting, setUserToken, setError });
                            }} />
                        )}
                    </View>
                </View>
            </View>
            <SnackBar error={error} setError={setError} />
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
        width: width * 1.074,
        height: width / 1.16,
    },
    BottomSheet: {
        width,
        height: height * 0.65,
        position: 'absolute',
        bottom: 0,
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
    BtmSheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: width / 13.03,
    },
    LoginTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 15.038,
        color: Colors.text,
    },
    Iconuser: {
        width: width / 11.5,
        height: width / 11.5,
    },
    BtnContainer: {
        marginTop: width / 13.03,
    },
    btnBox: {
        backgroundColor: Colors.secondary,
        width: width / 1.143,
        height: width / 6.627,
        borderRadius: 16.29,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        fontFamily: fonts.bold,
        fontSize: width / 23,
        color: Colors.primary,
    },
};

export default Login;
