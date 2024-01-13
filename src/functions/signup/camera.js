import { launchCamera } from 'react-native-image-picker';

export const handleCameraLaunch = ({ user, setUser }) => {
    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    launchCamera(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled camera');
        } else if (response.error) {
            console.log('Camera Error: ', response.error);
        } else {
            // Process the captured image
            let imageUri = response.uri || response.assets?.[0]?.uri;
            // setSelectedImage(imageUri);
            setUser({ ...user, profile_picture: imageUri });
            console.log(imageUri);
        }
    });
};
