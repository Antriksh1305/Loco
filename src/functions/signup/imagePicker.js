import { launchImageLibrary } from 'react-native-image-picker';

export const openImagePicker = ({ user, setUser }) => {
    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            // setSelectedImage(imageUri);
            setUser({ ...user, profile_picture: imageUri });
            console.log(imageUri);
        }
    });
};
