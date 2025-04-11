import React from "react";
import zus_frappe from "../assets/zus_frappe_2022.mp4";
import phone from "../assets/phone.png";
const Home = () => {
  return (
    <>
      {/* UPPER PAGE */}
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
        <div className="absolute top-0 left-0 w-full h-5/6 bg-black/60 z-10"></div>

        {/* Centered Text */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 md:px-8 lg:px-16 xl:px-32 ">
            <h1 className="text-white text-4xl md:text-5xl font-Playfair font-bold w-80 md:w-96 mx-auto">
              A Daily Essential, Not a Luxury
            </h1>
            <p className="mt-8 w-80 md:w-96 mx-auto">
              For many, coffee is part of daily life. Specialty brews, however,
              are often seen as indulgent. We built ZUS Coffee to shift that
              perspective.
            </p>
          </div>
        </div>
      </div>

      {/* MABUHAY PH */}
      <div>
        <div>
          <div>
            <h1>Mabuhay, Philippines!</h1>
            <p>
              ZUS Coffee is excited to serve you specialty coffee crafted with
              passion. We believe everyone deserves premium coffee without the
              premium price tag. Ready na ba for the ultimate kape experience?
              Tara, let’s brew something special!
            </p>
            <button>Our Story</button>
          </div>
          <div>
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
