import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.scss';
import Launcher from "./pages/launcher";
import Home from "./pages/home";

function App() {

    return (
        <div className="todo-app-container">
            <Router>
                <Switch>
                    {/*todo-item why exact?*/}
                    <Route exact path="/launcher">
                        <Launcher/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;