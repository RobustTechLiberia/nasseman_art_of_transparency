import React from 'react';
import HeroImage from '../components/heroImage.jsx';
import Section from '../components/section_1.jsx';
import News from '../components/news.jsx';
import Navbar from '../components/navbar.jsx';

class Home extends React.Component {
    render(){

        return(
            <>
            <Navbar />
            <HeroImage />
            <Section />
            <News />
            </>
        );
    }
}

export default Home;