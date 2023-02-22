import React from 'react';
import Countries from '../../components/Countries';
import Country from '../../components/Country';
import Header from '../../components/Header/Header';
import { HomeContent } from './Home.styled';

const Home = () => {
  return (
    <>
      <Header />
      <HomeContent>
        <Countries />
        <Country />
      </HomeContent>
    </>
  );
};

export default Home;
