import { API } from '../../apis';
import { navigateDispatch } from '../../navigators/Root';

export const login = async ({ email, password, setIsSubmitting }) => {
    try {
        setIsSubmitting(true);
        const response = await fetch(API.BASE_URL + API.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        console.log(result);
        tokenValidity({ token: result.token, setIsSubmitting });
    }
    catch (error) {
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};

export const tokenValidity = async ({ token, setIsSubmitting }) => {
    try {
        const response = await fetch(API.BASE_URL + API.TOKEN_VALIDITY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                x_auth_token: token,
            },
        });

        // const result = await response.json();
        const status = await response.status;
        if (status === 200) {
            console.log('token is valid');
            navigateDispatch({ index: 0, routes: [{ name: 'Home' }] });
        }
        else {
            console.log('token is invalid');
        }
    }
    catch (error) {
        console.error('Error:', error);
    } finally {
        setIsSubmitting(false);
    }
};
