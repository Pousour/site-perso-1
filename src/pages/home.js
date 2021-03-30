import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Parcours from '../components/Parcours';
import Presentation from '../components/Presentation';




const contact = () => {
    return (
        <>
            <Navigation/>
            <Presentation/>
            <Parcours/>
            <Footer/>
        </>
    );
};

export default contact;