"use client";

import { motion } from "motion/react";

const Aboutpage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.button
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click Me!
      </motion.button>
    </div>
  )
}
export default Aboutpage