import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" alt="" />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"}  category={"upcoming"} />
      <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
