import React from "react";
import Home from "../components/Home"
import Footer from '../components/Footer';
import Features from '../components/Features';
import Billing from '../components/Billing';

function HomePage(){
    return(
        <>
        <Home/>
        <Features/>
        <Billing/>
        <Footer/>
        </>
    );
};

export default HomePage;