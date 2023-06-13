import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function TextUnderline({ children, bottom = 0 }) {
  return (
    <chakra.span pos="relative" display="inline">
      <chakra.span
        pos="absolute"
        bottom={bottom}
        // left="-.01rem"
        // w="full"
        h=".3rem"
        bg="linear-gradient(90deg, rgba(44, 255, 52, 0.54) 0%, rgba(44, 90, 255, 0.54) 100%)"
        display="block"
        zIndex={-1}
        as={motion.span}
        whileInView={{ width: ["0%", "100%"], left: ["50%", "-.01%"] }}
      />
      {children}
    </chakra.span>
  );
}
