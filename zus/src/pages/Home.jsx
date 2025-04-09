import React from "react";
import zus_frappe from "../assets/zus_frappe_2022.mp4";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-5/6 object-cover"
          src={zus_frappe}
          autoPlay
          loop
          muted
        />

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

        {/* Centered Text */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Welcome to ZUS</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
