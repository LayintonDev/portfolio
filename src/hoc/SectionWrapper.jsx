import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span id={id} />
        <Component />
      </motion.div>
    );
  };

export default SectionWrapper;
