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
        registerRequest(state) {
            state.registerLoading = true;
        },
        registerSuccess(state, action) {
            state.registerLoading = false;
            state.user = action.payload;
        },
        registerFailure(state, action) {
            state.registerLoading = false;
            state.registerError = action.payload;
        },
        loginRequest(state) {
            state.loginLoading = true;
        },
        loginSuccess(state, action) {
            state.loginLoading = false;
            state.user = action.payload;
        },
        loginFailure(state, action) {
            state.loginLoading = false;
            state.loginError = action.payload;
        },
        logoutRequest(state) {
            state.logoutLoading = true;
            state.logoutError = null;
        },
        logoutSuccess(state) {
            state.logoutLoading = false;
            state.user = null;
        },
        logoutFailure(state, action) {
            state.logoutLoading = false;
            state.logoutError = action.payload;
        },
        clearLoginErrors(state) {
            state.loginError = null;
        },
        clearRegisterErrors(state) {
            state.registerError = null;
        }
    },
});

export const {
    registerRequest,
    registerSuccess,
    registerFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    clearLoginErrors,
    clearRegisterErrors
} = usersSlice.actions;

export default usersSlice;
