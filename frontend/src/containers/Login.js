import React, {useEffect, useState} from 'react';
import close from "../assets/close-eye.png";
import open from "../assets/open-eye.png";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/actions/usersActions";
import {historyPush} from "../store/actions/historyActions";
import {clearLoginErrors} from "../store/slices/usersSlice";

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.loginError);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [isShow, setIsShow] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        dispatch(loginUser({...user}));
    };

    const inputUserChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    useEffect(() => {
        return () => {
            dispatch(clearLoginErrors());
        }
    }, [dispatch]);

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

                            {error && <p className="auth__error">{error?.error}</p>}


                            <Link to="/forgot">
                                <p className="auth__forgot">Забыли пароль?</p>
                            </Link>
                        </div>
                    </div>

                    <div className="auth__buttons">
                        <button
                            className="auth__auth-button"
                            type="submit"
                        >
                            Войти
                        </button>

                        <button
                            type="button"
                            className="auth__auth-button auth__auth-button-reg"
                            onClick={() => dispatch(historyPush('/register'))}
                        >
                           Создать ID
                        </button>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default Login;