import React from 'react';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import ContactUs from '../../ContactUs/ContactUs';
import Faq from '../../Faq/Faq';
import Banner from '../Banner/Banner';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureProducts></FeatureProducts>
            <BusinessSummary></BusinessSummary>
            <Faq></Faq>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;