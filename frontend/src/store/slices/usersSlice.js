import { createSlice } from '@reduxjs/toolkit';

const name = 'users';

export const initialState = {
    user: null,
    loginLoading: false,
    loginError: null,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        loginRequest(state) {
            state.loginLoading = true;
            state.loginError = null;
        },
        loginSuccess(state, action) {
            state.loginLoading = false;
            state.user = action.payload;
        },
        loginFailure(state, action) {
            state.loginLoading = false;
            state.loginError = action.payload;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
} = usersSlice.actions;

export default usersSlice;
