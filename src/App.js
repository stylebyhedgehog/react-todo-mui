import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => (
    <>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
            </Toolbar>
        </AppBar>
        <Container>
            <Routes>
                <Route path="/react-todo-mui" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Container>
    </>
);

export default App;
