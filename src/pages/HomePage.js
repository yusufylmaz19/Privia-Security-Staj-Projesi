import React from "react";
import Home from "../components/Home"
import Footer from '../components/Footer';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

function HomePage(){
    return(
        <>
        <Home/>
        <Features/>
        <Pricing/>
        <Footer/>
        </>
    );
};

export default HomePage;