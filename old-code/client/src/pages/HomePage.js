import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Checkbox, Radio } from "antd";
// import { useCart } from "../context/cart";
// import toast from "react-hot-toast";
import {} from "../styles/HomePage.css";

const HomePage = () => {
  return (
    <Layout title={"PawTales - Pet Adoption Platform"}>
      <div id="home-sect">
        {/* section HOME */}
        <section id="home">
          <section id="home-quote1">
            <div className="info">
              {/* <img
                id="home-logo"
                src="assets/pawtales-yellow-logo.png"
                alt="logo"
              /> */}
              <p>
                Money can buy u a fine Dog, <br />
                but only love can make him wag his tail.{" "}
              </p>
              <a href="/products" id="button-home" className="button">
                Adopt a Pet !
              </a>
            </div>
            {/* <img id="home-img" src="assets/dog-boy1.png" alt="image" /> */}
          </section>
        </section>
        {/* Section  */}
        <section id="home-features">
          <h2>Why Adopt with us?</h2>
          <div className="tri-container">
            <div className="tri-container-items" id="img1">
              {/* <img src="assets/play-with-pet1.png" alt="heart icon" /> */}
              <p>We care about the welfare of our furry friends.</p>
            </div>
            <div className="tri-container-items"id="img2">
              <p>We help you find the perfect pet for your home.</p>
              {/* <img src="assets/play-with-pet2.png" alt="home icon" /> */}
            </div>
            <div className="tri-container-items" id="img3">
              {/* <img src="assets/play-with-pet3.png" alt="paw icon" /> */}
              <p>
                We provide support and guidance throughout the adoption process.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
