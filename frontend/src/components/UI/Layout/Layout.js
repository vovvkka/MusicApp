import React from 'react';
// import HeaderDesktop from "../Header/HeaderDesktop";

const Layout = ({children}) => {
    return (
        <div className="wrapper">
            <div className='main'>
                {children}
            </div>
        </div>
    );
};

export default Layout;