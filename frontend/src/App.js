import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main";
import Login from "./containers/Login";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Layout>
    );
};

export default App;