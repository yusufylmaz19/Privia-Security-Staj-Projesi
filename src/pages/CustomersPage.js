import React from "react";
import Footer from '../components/Footer';
import Customers from "../components/Customers";
import Cta from "../components/Cta";

function CustomersPage(){
    return(
        <>
        <Customers />
        <Cta />
        <Footer/>
        </>
    );
};

export default CustomersPage;