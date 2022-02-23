import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms from R899">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </React.Fragment>
  );
};

export default Home;
