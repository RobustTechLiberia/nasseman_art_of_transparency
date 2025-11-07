import React from 'react';
import HeroImage from '../components/heroImage.jsx';
import Section from '../components/section_1.jsx';
import News from '../components/news.jsx';
import Navbar from '../components/navbar.jsx';
import Partenership from '../components/partenership.jsx';
import Sec from  '../components/section_2.jsx'
import Support from '../components/support.jsx';
import Sponsorship from '../components/sponsor.jsx';


class Home extends React.Component {
    render(){

        return(
            <>
            <Navbar />
            <HeroImage />
            <Section />
            <News />
            <Partenership />
            <Sec />
            <Support />
            <Sponsorship/>
            
            </>
        );
    }
}

export default Home;