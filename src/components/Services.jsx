import React, { Component } from "react";
import { FaHiking, FaShuttleVan, FaWater } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. in sit quas aperiam? Impedit vero placeat possimus.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Ride",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. in sit quas aperiam? Impedit vero placeat possimus.",
      },
      {
        icon: <FaWater />,
        title: "free Cold Water",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. in sit quas aperiam? Impedit vero placeat possimus.",
      },
      {
        icon: <FaHiking />,
        title: "free Camping",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. in sit quas aperiam? Impedit vero placeat possimus.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
