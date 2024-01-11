import { API } from '../../apis';

export const login = () => {
    console.log(API.BASE_URL + API.LOGIN);
    console.log(API.BASE_URL + API.TOKEN_VALIDITY);
};
