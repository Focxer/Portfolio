import { motion } from "framer-motion";
import { ReactNode } from "react";

type IFromBottom = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

const FromBottom = (props: IFromBottom) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.7 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "tween",
        duration: props.duration ?? 0.3,
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default FromBottom;
