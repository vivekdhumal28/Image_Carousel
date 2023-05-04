import React from "react";
import Carousel from "./Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const Main = () => {
  return (
    <>
      <main className="flex justify-center">
        <div className="max-w-lg">
          <Carousel>
            {slides.map((s, i) => (
              <img key={i} alt="slides" src={s} />
            ))}
          </Carousel>
        </div>
      </main>
      ;
    </>
  );
};

export default Main;
