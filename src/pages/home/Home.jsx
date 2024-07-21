import React from 'react'
import "./Home.css";
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownLoad from '../../components/appDownLoad/AppDownLoad';


const Home = () => {

  const [category, setCategory] = useState('All');


  return (
    <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category} />
    <AppDownLoad />
    </div>
  )
}

export default Home