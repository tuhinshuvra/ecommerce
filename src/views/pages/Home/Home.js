import React from 'react';
import './Home.css';
import HomeHeroCarousol from '../../components/HomeComponents/HomeHeroSection/HomeHeroCarousol';
import HomeSpecialitySection from '../../components/HomeComponents/HomeSpecialitySection/HomeSpecialitySection';
import HomeProductSection from '../../components/HomeComponents/HomeProductSection/HomeProductSection';
import HomeServiceSection from '../../components/HomeComponents/HomeServiceSection/HomeServiceSection';
import HomeContactSection from '../../components/HomeComponents/HomeContactSection/HomeContactSection';
import HomeOfferSection from '../../components/HomeComponents/HomeOfferSection/HomeOfferSection';

const Home = () => {
    return (
        <div>
            <HomeHeroCarousol></HomeHeroCarousol>
            <HomeSpecialitySection></HomeSpecialitySection>
            <HomeProductSection></HomeProductSection>
            <HomeOfferSection></HomeOfferSection>
            <HomeServiceSection></HomeServiceSection>
            <HomeContactSection></HomeContactSection>

        </div>
    );
};

export default Home;