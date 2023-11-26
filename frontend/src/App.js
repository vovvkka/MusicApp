import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
        </Layout>
    );
};

export default App;