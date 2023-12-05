import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root'

import NotfoundPage from './pages/Notfound'

import './App.css'
import ProblemPage from './pages/Problem';

const App = () => {
    const isDarkmode = useSelector((state: any) => state.app.isDarkmode);
    const isLogin = useSelector((state: any) => state.auth.isLogin);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RootPage} />
                    <Route path="/problem" component={ProblemPage} />

                    
                    <Route path='*' component={NotfoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;