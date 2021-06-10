import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from 'react-redux';
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

const Home = props => {
  return (
    <div>
      
      <Navbar/>

      <div id="home">
        <HeroSection {...homeObjOne} />
      </div>
      <div id="Vision">
        <HeroSection {...homeObjTwo} />
      </div>
      <div id="About">
        <HeroSection {...homeObjThree} />
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};



export default connect(mapStateToProps)(Home);
