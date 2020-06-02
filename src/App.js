import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

const App = () => {
    return (
        <div className='wrapper'>
            <Nav />
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/home' />
                    <Route path='/home' component={Portfolio} />
                    <Route path='/about' component={About} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
