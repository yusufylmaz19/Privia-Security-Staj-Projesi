import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Home from "./components/Home"
import Footer from './components/Footer';
import Features from './components/Features';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
    <Header/>
    <Home/>
    <Features/>
    </>
);