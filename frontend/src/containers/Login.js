import React, {useState} from 'react';
import close from "../assets/close-eye.png";
import open from "../assets/open-eye.png";
// import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Login = () => {
    // const dispatch = useDispatch();
    // const error = useSelector(state => state.users.loginError);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [isShow, setIsShow] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        // dispatch(loginUser({...user}));
    };

    const inputUserChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="login">
                <div className="login__form">
                    <div className="login__title">
                        <p>Groove <span>ID</span></p>
                    </div>

                    <div className="login__block">
                        <div className="login__input-block">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="login__input"
                                value={user.email}
                                onChange={inputUserChangeHandler}
                            />
                        </div>

                        <div className="login__input-block">
                            <label>Пароль</label>
                            <div className="login__eye-block">
                                <input
                                    type={isShow ? "text" : "password"}
                                    name="password"
                                    className="login__input"
                                    value={user.password}
                                    onChange={inputUserChangeHandler}
                                />
                                <img
                                    src={isShow ? close : open}
                                    onClick={() => setIsShow(prev => !prev)}
                                    className="login__input-eye"
                                    width="25px"
                                    alt="eye"
                                />
                            </div>

                            <Link to="/forgot">
                                <p className="login__forgot">Забыли пароль?</p>
                            </Link>
                        </div>

                        {/*{error && <p className="login__error">{error?.error}</p>}*/}
                    </div>

                    <div className="login__buttons">
                        <button
                            className="login__auth-button"
                            type="submit"
                        >
                            Войти
                        </button>

                        <button className="login__auth-button login__auth-button-reg">
                            <Link to="/register">Создать ID</Link>
                        </button>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default Login;