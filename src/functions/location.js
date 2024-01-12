import Geolocation from '@react-native-community/geolocation';
import { API } from '../apis';

export const startLocationTracking = () => {
    Geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            // Handle the received location data (e.g., send it to the server)
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
            console.log('Location tracking error:', error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );
};
