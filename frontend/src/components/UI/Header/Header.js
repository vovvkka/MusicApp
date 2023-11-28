import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__block">

                <div className="header__block-left">
                    <div className="header__logo">
                        <NavLink to="/">
                            VA Музыка
                        </NavLink>
                    </div>

                    <div className="header__nav">
                        <ul>
                            <NavLink to="/" activeClassName="header__nav-link" exact>
                                <li>Главное</li>
                            </NavLink>
                            <NavLink to="/kids" activeClassName="header__nav-link">
                                <li>Детям</li>
                            </NavLink>
                            <NavLink to="/my-collection" activeClassName="header__nav-link">
                                <li>Любимое</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                <div className="header__block-right">
                    <Link to="/login" className="header__auth-button">Войти</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;