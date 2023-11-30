import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Dropdown, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {logoutUser} from "../../../store/actions/usersActions";

const Anonymous = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);

    const onLogout = async () => {
        await dispatch(logoutUser());
    }

    const items = [
        {
            label: <p className="header__dropdown-el">{user?.username}</p>,
            key: '0',
            type: 'group',
        },
        {
            label: <Link to="/my-collection">Любимое</Link>,
            key: '1',
        },
        {
            label: <Link to="/settings">Настройки</Link>,
            key: '2',
        },
        {
            label: <p onClick={onLogout}>Выйти</p>,
            key: '3',
        },
    ];

    return (
        <div className="header__block-right">
            {
                user ?
                    <Dropdown menu={{items}} trigger={['click']} placement="bottom">
                        <li
                            onClick={(e) => e.preventDefault()}
                            className="header__dropdown"
                        >
                            <Space className="header__dropdown-block">
                                <UserOutlined className="header__dropdown-user"/>
                            </Space>
                        </li>
                    </Dropdown>
                    :
                    <Link to="/login" className="header__auth-button">Войти</Link>
            }
        </div>
    );
};

export default Anonymous;