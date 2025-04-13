import { useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import zus_frappe from "../assets/zus_frappe_2022.mp4";
import phone from "../assets/phone.png";
import BerryCheesecake from "../assets/menu/Berry-Cheesecake.png";
import ceoLatte from "../assets/menu/ceo_latte.png";
import IrishCream from "../assets/menu/Irish-Cream.png";
import SpanishLatte from "../assets/menu/spanish_latte.png";
import RandomDesign from "../assets/menu/Untitled-design-1.png";

const Home = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  // Array of menu items
  const flavorMenu = [
    {
      img: ceoLatte,
      name: "CEO Latte",
      type: "",
      temp: "Hot",
    },
    {
      img: SpanishLatte,
      name: "Spanish Latte",
      type: "",
      temp: "Ice/Hot",
    },
    {
      img: BerryCheesecake,
      name: "Berry Cheesecake",
      type: "Frappes",
      temp: "Ice",
    },
    {
      img: IrishCream,
      name: "Irish Cream",
      type: "Frappes",
      temp: "Ice",
    },
    {
      img: RandomDesign,
      name: "Triple Java Jelly",
      type: "",
      temp: "Ice",
    },
  ];

  // Tripling the array for better loop illusion
  const infiniteFlavorMenu = [...flavorMenu, ...flavorMenu, ...flavorMenu];

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;
    const sectionWidth = totalWidth / 3;

    // Set initial scroll to the middle section
    container.scrollLeft = sectionWidth;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = sectionWidth;
      } else if (container.scrollLeft + visibleWidth >= totalWidth) {
        container.scrollLeft = sectionWidth - visibleWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* UPPER PAGE */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-5/6 object-cover"
          src={zus_frappe}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-5/6 bg-black/60 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 md:px-8 lg:px-16 xl:px-32">
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
      <div className="px-6 md:px-20 lg:px-40 xl:px-60 pb-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-Playfair text-zusPrimary font-extrabold text-3xl md:text-4xl mb-5">
              Mabuhay, Philippines!
            </h1>
            <p className="text-base md:text-lg mb-5 font-Montserrat">
              ZUS Coffee is excited to serve you specialty coffee crafted with
              passion. We believe everyone deserves premium coffee without the
              premium price tag. Ready na ba for the ultimate kape experience?
              Tara, let's brew something special!
            </p>
            <button className="bg-zusPrimary hover:bg-orange-200 duration-200 px-8 py-2 rounded-full text-white font-extrabold font-Montserrat cursor-pointer">
              Our Story
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={phone}
              alt="ZUS Coffee App"
              className="w-3/4 md:w-2/3 lg:w-full"
            />
          </div>
        </div>
      </div>

      {/* A Brew To Beat The Blues */}
      <div className="px-6 md:px-20 lg:px-40 xl:px-60 pb-10">
        <div className="text-center">
          <h1 className="font-Playfair font-extrabold text-zusPrimary text-4xl mb-5">
            A Brew To Beat The Blues
          </h1>
          <p className="font-Montserrat font-semibold">
            Power up your day with ZUS Coffee. No matter your taste or
            lifestyle, we've got the perfect brew for you.
          </p>
        </div>
      </div>

      {/* DRAGGABLE SCROLL FLAVOR MENU */}
      <div
        ref={ref}
        {...events}
        className="flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing px-6 pb-14"
        style={{
          userSelect: "none",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {infiniteFlavorMenu.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] mt-60 pt-20 bg-blue-50 rounded-2xl px-6 py-8 flex-shrink-0 shadow-md relative"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-40 mx-auto object-contain absolute bottom-16 left-16 mb-20"
              draggable="false"
            />
            <p className="text-center text-xl md:text-2xl text-zusPrimary font-extrabold">
              {item.name}
            </p>
            <hr className="h-px my-4 bg-gray-200 border-0" />
            <div className="flex justify-between text-sm md:text-base font-Montserrat px-2">
              <span>{item.type}</span>
              <span>{item.temp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-zusPrimary hover:bg-orange-200 duration-200 px-8 py-2 rounded-full text-white font-extrabold font-Montserrat cursor-pointer">
          Our Story
        </button>
      </div>
    </>
  );
};

export default Home;
