import React from 'react';
import Countries from '../../components/Countries';
import Country from '../../components/Country';
import CountryModal from '../../components/CountryModal';
import Header from '../../components/Header/Header';
import { useIsMobile } from '../../hooks/useIsMobile';
import { HomeContent } from './Home.styled';

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <HomeContent>
        <Countries />
        {/* Desktop shows the country panel; mobile shows it in the modal instead.
            Rendered conditionally (not hidden) so only one map exists at a time. */}
        {!isMobile && <Country />}
      </HomeContent>
      <CountryModal />
    </>
  );
};

export default Home;
