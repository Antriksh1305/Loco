import { API } from '../../apis';
import { navigateDispatch } from '../../navigators/Root';

const getFileExtension = (uri) => {
    return uri.split('.').pop();
};

export const handleSubmit = async ({ user, setIsSubmitting, setUserToken, setError }) => {
    try {
        setIsSubmitting(true);
        if (!checkCredentials({ user, setError })) {
            setIsSubmitting(false);
            return;
        }
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
                name: `profile_pic_${user.email}.${getFileExtension(uri)}`,
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

        navigateDispatch({ index: 0, routes: [{ name: 'Home' }] });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};

const checkCredentials = ({ user, setError }) => {
    const name = user.name;
    const email = user.email;
    const password = user.password;
    const age = parseInt(user.age, 10);
    const pic = user.profile_picture;

    if (!name || !email || !password || !age) {
        setError('Please fill all the fields');
    }
    else if (email.includes('@') === false || email.includes('.') === false) {
        setError('Please enter a valid email');
    }
    else if (password.length < 5) {
        setError('Password must be at least 5 characters long');
    }
    else if (isNaN(age)) {
        setError('Please enter a valid age (a number)');
    }
    else if (pic === '') {
        setError('Please choose a profile picture');
    }
    else {
        return true;
    }
    return false;
};
