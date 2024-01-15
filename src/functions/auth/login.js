import { API } from '../../apis';
import { navigateDispatch } from '../../navigators/Root';

export const login = async ({ email, password, setIsSubmitting, setUserToken, setError }) => {
    try {
        setIsSubmitting(true);
        if (!checkCredentials({ email, password, setError })) {
            setIsSubmitting(false);
            return;
        }
        const response = await fetch(API.BASE_URL + API.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (result.error) {
            setError(result.error);
            return;
        }
        console.log(result);
        tokenValidity({ token: result.token, setIsSubmitting, setUserToken, setError });
    }
    catch (error) {
        setError('Invalid credentials');
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};

export const tokenValidity = async ({ token, setIsSubmitting, setUserToken, setError }) => {
    try {
        const response = await fetch(API.BASE_URL + API.TOKEN_VALIDITY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        });

        const status = await response.status;
        if (status === 200) {
            console.log('token is valid');
            setUserToken(token);
            navigateDispatch({ index: 0, routes: [{ name: 'Home' }] });
        }
        else {
            setError('Invalid Credentials');
            console.log('token is invalid');
        }
    }
    catch (error) {
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};

const checkCredentials = ({ email, password, setError }) => {
    if (email === '' || password === '') {
        setError('Please enter all fields');
    }
    else if (!email.includes('@') || email.includes('.') === false) {
        setError('Please enter a valid email');
    }
    else if (password.length < 5) {
        setError('Password must be at least 5 characters');
    }
    else {
        return true;
    }
    return false;
};
