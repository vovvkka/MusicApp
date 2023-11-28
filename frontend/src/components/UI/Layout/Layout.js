import React from 'react';
import Header from "../Header/Header";
// import HeaderDesktop from "../Header/HeaderDesktop";

const Layout = ({children}) => {
    return (
        <div className="wrapper">
            <div className="wrapper__background">
                <Header/>

                <div className='main'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;