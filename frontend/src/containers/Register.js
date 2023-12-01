import React, {useState} from 'react';
import {registerUser} from "../store/actions/usersActions";
import {useDispatch, useSelector} from "react-redux";
import close from "../assets/close-eye.png";
import open from "../assets/open-eye.png";
import {Link} from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);

    const [isShow, setIsShow] = useState(false);
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
    });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(registerUser({...user}));
    };

    const inputUserChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    const getRegisterFieldError = fieldName => {
        try {
            return error.error[fieldName].message;
        } catch {
            return undefined;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="auth">
                <div className="auth__form">
                    <div className="auth__title">
                        <p>Groove <span>ID</span></p>
                    </div>

                    <div className="auth__block">
                        <div className="auth__input-block">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="auth__input"
                                value={user.email}
                                onChange={inputUserChangeHandler}
                            />
                            <p className="auth__error">{getRegisterFieldError("email")}</p>
                        </div>

                        <div className="auth__input-block">
                            <label>Имя пользователя</label>
                            <input
                                type="text"
                                name="username"
                                className="auth__input"
                                value={user.username}
                                onChange={inputUserChangeHandler}
                            />
                            <p className="auth__error">{getRegisterFieldError("username")}</p>
                        </div>

                        <div className="auth__input-block">
                            <label>Пароль</label>
                            <div className="auth__eye-block">
                                <input
                                    type={isShow ? "text" : "password"}
                                    name="password"
                                    className="auth__input"
                                    value={user.password}
                                    onChange={inputUserChangeHandler}
                                />
                                <img
                                    src={isShow ? close : open}
                                    onClick={() => setIsShow(prev => !prev)}
                                    className="auth__input-eye"
                                    width="25px"
                                    alt="eye"
                                />
                            </div>
                            <p className="auth__error">{getRegisterFieldError("password")}</p>

                            <Link to="/login">
                                <p className="auth__forgot">Уже есть аккаунт?</p>
                            </Link>
                        </div>
                    </div>

                    <div className="auth__buttons">
                        <button
                            type="submit"
                            className="auth__auth-button"
                        >
                            Создать ID
                        </button>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Register;