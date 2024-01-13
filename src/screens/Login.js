import React, { useContext } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import User from '../context/user';

// functions
import { login } from '../functions/auth/logIn';

// assets
import { images } from '../../assets/images';
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

// components
import Button from '../components/button';
import Input from '../components/input';

const Login = () => {
    const [user, setUser] = useContext(User);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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
                            <Image source={images.Iconuser} style={styles.Iconuser} />
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
                                login({ email, password, setIsSubmitting });
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
        width: 420,
        height: 337,
    },
    BottomSheet: {
        width,
        height: height * 0.65,
        position: 'absolute',
        bottom: 0,
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
    BtmSheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    LoginTxt: {
        fontFamily: fonts.bold,
        fontSize: 26,
        color: Colors.text,
    },
    Iconuser: {
        width: 34,
        height: 34,
    },
    BtnContainer: {
        marginTop: 30,
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
};

export default Login;
