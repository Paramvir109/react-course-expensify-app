import authReducer from '../../reducers/auth';


test('should set uid for login' , () => {
    const uid = '1234';
    const state = authReducer({}, {type : 'LOGIN',uid})
    expect(state.uid).toBe(uid)
})

test(' should clear uid for logout ', () => {
   
    const state = authReducer({uid : '123'},{type : 'LOGOUT'});
    expect(state.uid).toBeFalsy();
})


