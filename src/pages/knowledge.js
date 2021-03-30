import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Languages from '../components/knowledges/Languages';
import Experiences from '../components/knowledges/Experiences';
import Otherskills from '../components/knowledges/Otherskills';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgeContent">
                <Languages/>
                <Experiences/>
                <Otherskills/>
                <Hobbies/>
            </div>
            <Footer/>
        </div>
    );
};

export default Knowledges;