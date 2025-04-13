import { useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      {/* UPPER PAGE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen w-full overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-5/6 object-cover"
          src={zus_frappe}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-5/6 bg-black/60 z-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-20 flex items-center justify-center h-full"
        >
          <div className="text-center text-white px-4 md:px-8 lg:px-16 xl:px-32">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-4xl md:text-5xl font-Playfair font-bold w-80 md:w-96 mx-auto"
            >
              A Daily Essential, Not a Luxury
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 w-80 md:w-96 mx-auto"
            >
              For many, coffee is part of daily life. Specialty brews, however,
              are often seen as indulgent. We built ZUS Coffee to shift that
              perspective.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* MABUHAY PH */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-6 md:px-20 lg:px-40 xl:px-60 pb-20"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-Playfair text-zusPrimary font-extrabold text-3xl md:text-4xl mb-5">
              Mabuhay, Philippines!
            </h1>
            <p className="text-base md:text-lg mb-5 font-Montserrat">
              ZUS Coffee is excited to serve you specialty coffee crafted with
              passion. We believe everyone deserves premium coffee without the
              premium price tag. Ready na ba for the ultimate kape experience?
              Tara, let's brew something special!
            </p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-zusPrimary hover:bg-orange-200 duration-200 px-8 py-2 rounded-full text-white font-extrabold font-Montserrat cursor-pointer"
            >
              Our Story
            </motion.button>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={phone}
              alt="ZUS Coffee App"
              className="w-3/4 md:w-2/3 lg:w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* A Brew To Beat The Blues */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-20 lg:px-40 xl:px-60 pb-10"
      >
        <div className="text-center">
          <h1 className="font-Playfair font-extrabold text-zusPrimary text-4xl mb-5">
            A Brew To Beat The Blues
          </h1>
          <p className="font-Montserrat font-semibold">
            Power up your day with ZUS Coffee. No matter your taste or
            lifestyle, we've got the perfect brew for you.
          </p>
        </div>
      </motion.div>

      {/* DRAGGABLE SCROLL FLAVOR MENU */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="min-w-[250px] md:min-w-[300px] mt-60 pt-20 bg-blue-50 rounded-2xl px-6 py-8 flex-shrink-0 shadow-md relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-20"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-zusPrimary hover:bg-orange-200 duration-200 px-8 py-2 rounded-full text-white font-extrabold font-Montserrat cursor-pointer"
        >
          Discover More
        </motion.button>
      </motion.div>
    </>
  );
};

export default Home;