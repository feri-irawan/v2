import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroImage(props) {
  return (
    <Center
      shadow="0 .5rem 5rem rgba(44, 255, 52, 0.15)"
      bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
      rounded={8}
      boxSize={250}
      as={motion.div}
      whileTap={{ scale: [1, 0.5, 1], rotate: [0, 20] }}
      cursor="pointer"
      {...props}
    >
      <Box bgColor="#1E1E1E" rounded="inherit" boxSize="calc(100% - .5rem)">
        <Box
          boxSize="full"
          bgColor="rgba(44, 255, 52, 0.05)"
          bgImg="url('/images/feri-irawan.jpg')"
          bgSize="cover"
          rounded={5}
        />
      </Box>
    </Center>
  );
}
