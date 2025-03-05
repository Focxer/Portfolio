import { motion } from "framer-motion";
import { useEffect } from "react";
import favicon from "../assets/favicon.webp";

const Loading = () => {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const dotClasses = "w-2 h-2 rounded-full bg-violet-400 will-change-transform drop-shadow-md";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const element = document.getElementById("loading");
      if (element) {
        element.classList.add(
          "opacity-0",
          "transition-opacity",
          "duration-500"
        );
        setTimeout(() => element.classList.add("hidden"), 500);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="loading"
      className="h-screen w-full bg-slate-50 bg-opacity-95 fixed z-50 flex flex-col justify-center items-center gap-4"
    >
      <img src={favicon} alt="Favicon" className="h-20 w-20" />

      <motion.div
        animate="pulse"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex gap-4"
      >
        <motion.div className={dotClasses} variants={dotVariants} />
        <motion.div className={dotClasses} variants={dotVariants} />
        <motion.div className={dotClasses} variants={dotVariants} />
      </motion.div>
    </div>
  );
};

export default Loading;
