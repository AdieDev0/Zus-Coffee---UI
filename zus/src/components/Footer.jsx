import React from "react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import IDK from "../assets/idk.png";
import { motion } from "framer-motion";

const Footer = () => {
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

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const linkVariants = {
    hover: {
      color: "#F97316", // zusPrimary color
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-blue-50"
    >
      {/* Social Media Section */}
      <motion.div 
        variants={itemVariants}
        className="py-10"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-center text-lg font-bold text-black/80"
        >
          Follow us on
        </motion.h1>
        <div className="flex justify-center gap-4 mt-5">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaInstagram className="size-7 text-orange-600 cursor-pointer" />
          </motion.div>
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaSquareFacebook className="size-7 text-blue-600 cursor-pointer" />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Info Section */}
      <motion.div 
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 bg-white px-6 md:px-20 py-10"
      >
        {/* Left Info */}
        <motion.div 
          variants={itemVariants}
          className="text-center md:text-left text-sm text-gray-700 space-y-2 font-Montserrat"
        >
          <h3 className="font-semibold">ZUSPRESSO PHILIPPINES INC.</h3>
          <h3>Company registration no: 635-381-780-00000</h3>
          <h3 className="text-xs text-gray-500">COPYRIGHT 2025 © ZUS COFFEE</h3>
        </motion.div>

        {/* Right Info */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center md:items-end space-y-2 text-sm"
        >
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={IDK} 
            alt="ZUS Logo" 
            className="mb-2" 
          />
          <motion.h3 
            variants={linkVariants}
            whileHover="hover"
            className="cursor-pointer duration-150"
          >
            Privacy Policy
          </motion.h3>
          <motion.h3 
            variants={linkVariants}
            whileHover="hover"
            className="cursor-pointer duration-150"
          >
            Terms & Conditions
          </motion.h3>
          <motion.h3 
            variants={linkVariants}
            whileHover="hover"
            className="cursor-pointer duration-150 text-center md:text-right"
          >
            Anti-Bribery Corruption Policy
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;