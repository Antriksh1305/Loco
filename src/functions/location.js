import Geolocation from '@react-native-community/geolocation';
import { API } from '../apis';

export const startLocationTracking = ({ userToken }) => {
    Geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            sendLocation({ userToken, latitude, longitude });
        },
        (error) => {
            console.log('Location tracking error:', error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );
};

export const sendLocation = async ({ userToken, latitude, longitude }) => {
    try {
        const response = await fetch(API.BASE_URL + API.LOCATION, {
            method: 'POST',
            headers: {
                'x-auth-token': userToken,
            },
            body: JSON.stringify({ latitude: latitude, longitude: longitude }),
        });
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        console.error('Error:', error);
    }
};
