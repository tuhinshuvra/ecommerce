import React from 'react';
import './Home.css';
import HomeHeroCarousol from '../../components/HomeComponents/HomeHeroSection/HomeHeroCarousol';
import HomeSpecialitySection from '../../components/HomeComponents/HomeSpecialitySection/HomeSpecialitySection';
import HomeJewlerySection from '../../components/HomeComponents/HomeJewlerySection/HomeJewlerySection';
import HomeServiceSection from '../../components/HomeComponents/HomeServiceSection/HomeServiceSection';
import HomeContactSection from '../../components/HomeComponents/HomeContactSection/HomeContactSection';
import HomeOfferSection from '../../components/HomeComponents/HomeOfferSection/HomeOfferSection';

const Home = () => {
    return (
        <div>
            <HomeHeroCarousol></HomeHeroCarousol>
            <HomeSpecialitySection></HomeSpecialitySection>
            <HomeJewlerySection></HomeJewlerySection>
            <HomeOfferSection></HomeOfferSection>
            <HomeServiceSection></HomeServiceSection>
            <HomeContactSection></HomeContactSection>

        </div>
    );
};

export default Home;