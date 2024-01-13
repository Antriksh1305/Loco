/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { API } from '../apis';
import User from '../context/user';

//navigation
import { navigateDispatch } from '../navigators/Root';

// functions
import { startLocationTracking } from '../functions/location';

// assets
import { images } from '../../assets/images';
import { fonts } from '../../assets/fonts';

// constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width } from '../constants/screen';

// components
import StatisticsBox from '../components/UserStatisticsBox';

const Home = () => {
    const [userToken, setUserToken] = useContext(User);
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [locationAccess, setLocationAccess] = React.useState(false);
    const [isLocationModalVisible, setLocationModalVisible] = React.useState(true);

    const handleAllowAccess = () => {
        startLocationTracking({ userToken });
        setLocationAccess(true);
        setLocationModalVisible(false);
    };

    const handleLogout = () => {
        setLocationAccess(false);
        setLocationModalVisible(false);
        navigateDispatch({ index: 0, routes: [{ name: 'Onboarding' }] });
    };

    React.useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(API.BASE_URL + '/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': userToken,
                    },
                });

                const result = await response.json();
                console.log(result);
                setUser(result);
            }
            catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        getUser(userToken);
    }, [userToken]);

    const Arr = [
        { 'image': images.CheckCircle, 'title': 'Place Visited', 'count': 5 },
        { 'image': images.Clock, 'title': 'Hours Travelled', 'count': 18 },
        { 'image': images.Award, 'title': 'Surveys Completed', 'count': 9 },
    ];

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.main}>
                <View style={styles.ScreenHeader}>
                    <Text style={styles.ScreenHeaderTxt}>Profile</Text>
                </View>
                <View style={styles.ProfileInfoBox}>
                    <View>
                        <Image source={loading ? images.avatar : { uri: user?.image_url }} style={styles.UserProfilePic} />
                    </View>
                    <View style={styles.UserInfoBox}>
                        <Text style={styles.UserNameTxt}>{user.name}</Text>
                        <View style={styles.UserLocationBox}>
                            <Image source={images.LocationArrow} style={styles.LocationArrowImg} />
                            <Text style={styles.UserCityTxt}>New York City</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.UserInfoBgBox}>
                    <View style={styles.UserInfoBgInside}>
                        <View style={styles.UserInfoValues}>
                            <Text style={[styles.commonVTxt, { textDecorationLine: 'underline' }]}>{user.email}</Text>
                            <Text style={styles.commonVTxt}>{user.age}</Text>
                        </View>
                        <View style={styles.UserInfoHeaders}>
                            <Text style={styles.commonHTxt}>EMAIL</Text>
                            <Text style={styles.commonHTxt}>AGE</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.StatsHeader}>
                    <Text style={styles.StatsHeaderTxt}>General Statistics</Text>
                </View>
                <View style={styles.StatsInfosBox}>
                    {
                        Arr.map((item, index) => {
                            return (
                                <View key={index}>
                                    <StatisticsBox image={item.image} title={item.title} count={item.count} />
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.tabBarBox}>
                <View style={styles.blackCircle} />
                <Image source={images.Plus} style={styles.PlusIcon} />
                <View style={styles.blackCircle} />
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={isLocationModalVisible}
                onRequestClose={() => setLocationModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Location Permission Required</Text>
                        <Text style={styles.modalDescription}>
                            You need to allow the app to fetch your location to use Loco, otherwise you will be logged out!
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={handleAllowAccess} style={styles.allowButton}>
                                <Image source={images.Settings} style={styles.buttonIcon} />
                                <Text style={styles.buttonText}>Allow Access</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                                <Image source={images.Logout} style={styles.buttonIcon} />
                                <Text style={styles.buttonText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = {
    main: {
        flex: 1,
        backgroundColor: Colors.primary_dark,
    },
    ScreenHeader: {
        paddingVertical: width / 26.06,
        paddingTop: width / 7.82,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        shadowColor: Colors.text,
        shadowOpacity: 0.5,
        elevation: 6,
        shadowRadius: 20,
    },
    ScreenHeaderTxt: {
        fontFamily: fonts.medium,
        fontSize: width / 21.72,
        color: Colors.text,
    },
    ProfileInfoBox: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 13.03,
    },
    UserProfilePic: {
        width: width / 3,
        height: width / 3,
        borderRadius: 100,
    },
    UserInfoBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 19.55,
    },
    UserNameTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 16.3,
        color: Colors.text,
    },
    UserLocationBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 130.33,
    },
    LocationArrowImg: {
        width:width / 27.92,
        height: width / 27.92,
        marginRight: 5,
    },
    UserCityTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 32.583,
        color: Colors.text,
    },
    UserInfoBgBox: {
        marginTop: width / 19.55,
        width: width / 1.143,
        height: width / 3.91,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 16.3,
        backgroundColor: Colors.primary,
        shadowColor: Colors.text,
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 20,
    },
    UserInfoBgInside: {
        width: width / 1.203,
        height: width / 4.8875,
        justifyContent: 'center',
        borderRadius: width / 16.29,
        backgroundColor: Colors.primary,
        shadowColor: Colors.text,
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 20,
    },
    UserInfoValues: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: width / 19.55,
        paddingRight: width / 13.03,
    },
    commonVTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 19.55,
        color: Colors.text,
    },
    UserInfoHeaders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: width / 19.55,
        paddingRight: width / 13.03,
        paddingVertical: width / 78.2,
    },
    commonHTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 30.08,
        color: Colors.text,
    },
    StatsHeader: {
        alignItems: 'flex-start',
        marginTop: width / 13.03,
        paddingHorizontal: width / 13.03,
    },
    StatsHeaderTxt: {
        fontFamily: fonts.semiBold,
        fontSize: width / 30.08,
        color: Colors.text,
    },
    StatsInfosBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width / 15.64,
    },
    tabBarBox: {
        width,
        position: 'absolute',
        bottom: 0,
        paddingVertical: width / 39.1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 20,
        shadowRadius: 30,
    },
    blackCircle: {
        width: width / 17.77,
        height: width / 17.77,
        borderRadius: width / 15.64,
        backgroundColor: Colors.text,
    },
    PlusIcon: {
        width: width / 7.82,
        height: width / 7.82,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width / 1.14,
        padding: width / 19.55,
        borderRadius: width / 9.775,
        borderWidth: 0,
        backgroundColor: Colors.primary,
    },
    modalTitle: {
        textAlign: 'left',
        paddingHorizontal: width / 39.1,
        fontFamily: fonts.medium,
        fontSize: width / 19.55,
        marginBottom: width / 39.1,
        color: Colors.warningLight,
    },
    modalDescription: {
        paddingHorizontal: width / 39.1,
        textAlign: 'left',
        fontFamily: fonts.regular,
        fontSize: width / 26.06,
        marginBottom: width / 19.55,
        color: Colors.text,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    allowButton: {
        marginLeft: width / 39.1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        padding: width / 48.875,
        paddingHorizontal: width / 26.067,
        borderRadius: width / 16.29,
    },
    logoutButton: {
        marginRight: width / 39.1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.warning,
        padding: width / 48.875,
        paddingHorizontal: width / 26.067,
        borderRadius: width / 16.29,
    },
    buttonText: {
        fontFamily: fonts.semiBold,
        fontSize: width / 27.92,
        marginLeft: width / 78.2,
        color: Colors.primary,
    },
    buttonIcon: {
        width: width / 19.55,
        height: width / 19.55,
    },
};

export default Home;
