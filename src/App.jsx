import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/Homepage';

const App = () => {
    return (
        <Router>
            <HomePage />
        </Router>
    );
};

export default App;