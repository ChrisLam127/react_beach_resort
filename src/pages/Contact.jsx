import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Hero hero="roomsHero">
      <Banner
        title="contact us"
        subtitle="send us a message and we will get back to you"
      >
        <Link to="/" className="btn-primary">
          back home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Contact;
