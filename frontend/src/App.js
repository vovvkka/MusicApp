import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./containers/Main";
import Login from "./containers/Login";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
    return isAllowed ? <Route {...props} /> : <Redirect to="/" />;
};

const App = () => {
    const user = useSelector(state => state.users.user);

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Main}/>
                <ProtectedRoute
                    path="/login"
                    component={Login}
                    isAllowed={!user}
                    redirectTo="/"
                    exact
                />

            </Switch>
        </Layout>
    );
};

export default App;