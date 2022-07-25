import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from './components/Admin';
import Home from './components/Home';
import Statistics from './components/Statistics';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/statistics" element={<Statistics />}/>
                <Route path="/admin" element={<Admin />}/>
            </Routes>
      </Router>
    );
};

export default App;