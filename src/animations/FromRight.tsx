import { motion } from "framer-motion";
import { ReactNode } from "react";

type IFromRight = {
  children: ReactNode;
  className?: string;
  duration?: number;
  from?: number;
};

const FromRight = (props: IFromRight) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: props.from ?? 50 }}
      whileInView={{ opacity: 1, x: 0 }}
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

export default FromRight;
