import Geolocation from '@react-native-community/geolocation';
import { API } from '../apis';

export const startLocationTracking = ({ userToken }) => {
    Geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            sendLocation({ userToken, latitude, longitude });
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
};

export const sendLocation = async ({ userToken, latitude, longitude }) => {
    try {
        const response = await fetch(API.BASE_URL + API.LOCATION, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            },
            body: JSON.stringify({ coordinates: { latitude: latitude, longitude: longitude } }),
        });
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        console.error('Error:', error);
    }
};
