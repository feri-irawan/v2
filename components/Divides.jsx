import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function HorizontalDivide(props) {
  return (
    <Box
      {...props}
      as={motion.div}
      whileInView={{ width: ["0%", "50%"] }}
      mx="auto"
      h={1}
      bgGradient="linear(90deg, rgba(0, 0, 0, 0) -2.5%, #2CFF34 48.75%, rgba(0, 0, 0, 0) 100%)"
    />
  );
}
