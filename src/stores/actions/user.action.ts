export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (credential: object) => ({
    type: LOGIN_USER,
    credential
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});
