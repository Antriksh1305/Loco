import { API } from '../../apis';
import { navigateDispatch } from '../../navigators/Root';

const getFileExtension = (uri) => {
    return uri.split('.').pop();
};

export const handleSubmit = async ({ user, setIsSubmitting, setUserToken }) => {
    try {
        setIsSubmitting(true);
        const data = new FormData();
        data.append('name', user.name);
        data.append('email', user.email);
        data.append('password', user.password);
        data.append('age', user.age);

        const uri = user.profile_picture;
        const type = `image/${getFileExtension(uri)}`;

        // Append the file to the FormData
        if (user.profile_picture) {
            data.append('profile_picture', {
                uri: uri,
                type: type,
                name: `profile_picture.${getFileExtension(uri)}`,
            });
        }

        const response = await fetch(API.BASE_URL + API.REGISTER, {
            method: 'POST',
            body: data,
        });

        // Handle the response from the server
        const result = await response.json();
        console.log(result);
        const loginResponse = await fetch(API.BASE_URL + API.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, password: user.password }),
        });
        const loginResult = await loginResponse.json();
        setUserToken(loginResult.token);

        // It resets the navigation stack and redirects to the Home screen
        navigateDispatch({ index: 0, routes: [{ name: 'Home' }] });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};
