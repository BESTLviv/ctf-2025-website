'use client';

import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import FormatSection from './FormatSection';
import WhyCTFSection from './WhyCTFSection';
import PartnersSection from './PartnersSection';
import OrganisersSection from './OrganisersSection';
import ForWho from './ForWho';
import HowWhereWhenSection from './HowWhereWhen'
import TimelineSection from './TimelineSection'
import RegistrationSection from './RegistrationSection'
import FaqSection from './FaqSection'
import CoreteamSection from './CoreteamSection'
import SwiperSection from './SwiperSection';

import BottomSection from './BottomSection';
import CategoriesSection from './CategoriesSection';

export default function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SwiperSection />
        <FormatSection />
        <CategoriesSection />
      <ForWho />
      <WhyCTFSection />
      <HowWhereWhenSection />
      <TimelineSection />
      <RegistrationSection />
      <FaqSection />
      <CoreteamSection />
      <OrganisersSection />
      <PartnersSection />
      <BottomSection />
    </>
  );
}