import axiosApi from '../../axiosApi';
import {
    loginFailure,
    loginRequest,
    loginSuccess,
} from '../slices/usersSlice';

// export const registerUser = (userData) => {
//     return async (dispatch) => {
//         try {
//             dispatch(registerRequest());
//
//             const response = await axiosApi.post('/users', userData);
//
//             dispatch(registerSuccess(response.data));
//             dispatch(addNotification('Вы успешно зарегистрировались!', "success"));
//         } catch (e) {
//             dispatch(addNotification('Произошла ошибка!', "error"));
//             if (e.response && e.response.data) {
//                 dispatch(registerFailure(e.response.data));
//                 throw e;
//             } else {
//                 dispatch(registerFailure({global: 'No internet'}));
//                 throw e;
//             }
//         }
//     };
// };

export const loginUser = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest());

            const response = await axiosApi.post('/users/sessions', userData);

            dispatch(loginSuccess(response.data.user));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(loginFailure(e.response.data));
            } else {
                dispatch(loginFailure({global: 'No internet'}));
            }
        }
    };
};

// export const logoutUser = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(logoutRequest());
//
//             await axiosApi.delete('/users/sessions');
//
//             dispatch(logoutSuccess());
//         } catch (e) {
//             dispatch(logoutFailure(e));
//         }
//     };
// };

// export const forgotPassword = email => {
//     return async dispatch => {
//         try {
//             dispatch(forgotPasswordRequest());
//
//             await axiosApi.post('/users/forgot-password', {email});
//
//             dispatch(forgotPasswordSuccess());
//         } catch (e) {
//             dispatch(forgotPasswordFailure(e.response.data));
//             throw e;
//         }
//     };
// };
//
// export const resetPassword = (id, token, userData) => {
//     return async dispatch => {
//         try {
//             dispatch(resetPasswordRequest());
//
//             await axiosApi.post(`/users/reset-password/${id}/${token}`, userData);
//
//             dispatch(resetPasswordSuccess());
//             dispatch(historyPush('/'));
//         } catch (e) {
//             dispatch(resetPasswordFailure(e.response.data));
//         }
//     };
// };
//
// export const changePassword = (data) => {
//     return async dispatch => {
//         try {
//             dispatch(changePasswordRequest());
//
//             await axiosApi.put(`/users/change-password`, data);
//
//             dispatch(changePasswordSuccess());
//             dispatch(addNotification('Пароль успешно изменен!', "success"));
//         } catch (e) {
//             dispatch(addNotification('Произошла ошибка!', "error"));
//             dispatch(changePasswordFailure(e.response.data));
//         }
//     };
// };
//
// export const resendActivationLink = data => {
//     return async dispatch => {
//         dispatch(addNotification('Письмо было отправлено на почту!', "success"));
//         await axiosApi.post(`/users/resend-activationLink`, data);
//     }
// };
