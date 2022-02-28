import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/home";
import NotFound from "../src/pages/notFound";
import { ThemeProvider } from "@material-ui/core";
import theme from './theme';
import Navbar from "../src/components/navBar";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/*" element={ <NotFound /> } />
                </Routes>
            </Router>
        </ThemeProvider>

    );
};

export default App;