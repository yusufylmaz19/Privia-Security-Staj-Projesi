import React from "react";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import ResourcesPage from "../pages/ResourcesPage";
import CustomersPage from "../pages/CustomersPage";
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/Pricing" element={<PricingPage/>} />
        <Route exact path="/Resources" element={<ResourcesPage/>} />
        <Route exact path="/Customers" element={<CustomersPage/>} />
        </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;