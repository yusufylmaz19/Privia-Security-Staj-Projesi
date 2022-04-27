import React from "react";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import ResourcesPage from "../pages/ResourcesPage";
import CustomersPage from "../pages/CustomersPage";
import {HashRouter, BrowserRouter,Route,Routes} from 'react-router-dom';

function App(){
    return(
        <>
        {/* burada projenin page yapısnda çalışması için react router kullandım. 
        BrowserRouter yerine HashRouter kullanmamımın sebebi github pagesin BrowserRouter da çalışmaması */}
        <HashRouter >
        <Routes>
        <Route path="/Pricing" element={<PricingPage/>} />
        <Route path="/Resources" element={<ResourcesPage/>} />
        <Route path="/Customers" element={<CustomersPage/>} />
        <Route exact path="/" element={<HomePage/>} />
        </Routes>
        </HashRouter>
        </>
    );
};

export default App;