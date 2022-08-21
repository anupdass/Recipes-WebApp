import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import DetailsPage from '../Details/DetailsPage';
import SearchPage from '../SearchPage/SearchPage';

function Navigation() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="/search/:search" element={<SearchPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation