import { motion } from "framer-motion";
import { ReactNode } from "react";

type ISequence = {
  duration?: number;
  children: ReactNode;
};

const Sequence = (props: ISequence) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: props.duration ?? 0.3,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Sequence;
