import { MotionProps } from "framer-motion";

export const initScrollAnim: MotionProps = {
  initial: "hidden",
  transition: { duration: 0.5 },
  whileInView: "visible",
  viewport: { once: true },
};
