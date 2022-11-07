import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from '../imgs/event1.png';
import logo2 from '../imgs/event2.png';
import logo3 from '../imgs/event3.png';

SwiperCore.use([Pagination, Autoplay, Navigation]);

//yarn install / upgrade
//npm install

const Banner = () => {
  return (
    <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper
          style={{
            width: "50%",
            height: "350px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            overflow:"visible",
            
          }}
          spaceBetween={30}
          initialSlide={0}
          navigation
          loop="true"
          loopAdditionalSlides="1"

          pagination={{
            clickable: true,
          }}
          rewind = "true"
          autoplay={{ delay: 2500 }}
        >
          <SwiperSlide>
            <img
              src={logo}
              style={{ width: "100%", height: "100%" }}
              className="App-logo"
              alt="React"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={logo2}
              style={{ width: "100%", height: "100%" }}
              className="App-logo"
              alt="React"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={logo3}
              style={{ width: "100%", height: "100%" }}
              className="App-logo"
              alt="React"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Banner;