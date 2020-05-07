import {LOGIN_USER, loginUser, LOGOUT_USER, logoutUser} from "./user.action";

test('it should call action loginUser', () => {
    const credential = {
        user: 'test@test.com',
        password: 'secret',
    };

   const expectedAction = {
       type: LOGIN_USER,
       credential
   };

   expect(loginUser(credential)).toEqual(expectedAction);
});

test('it should call action logoutUser', () => {
   const expectedAction = {
       type: LOGOUT_USER
   };

   expect(logoutUser()).toEqual(expectedAction);
});
