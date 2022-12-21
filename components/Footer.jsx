import { chakra, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import TextUnderline from "./TextUnderline";

export default function Footer() {
  return (
    <chakra.footer
      p="5rem 0 1.5rem"
      textAlign="center"
      bgGradient="linear(0deg, #2CFF34 0%, rgba(44, 255, 52, 0.369792) 43.75%, rgba(0, 0, 0, 0) 100%)"
    >
      <Text>
        Made with{" "}
        <chakra.span display="inline-block" color="#FF0000" mb="-.25rem">
          <FaHeart />
        </chakra.span>{" "}
        by{" "}
        <TextUnderline>
          <strong>Feri Irawan</strong>
        </TextUnderline>
      </Text>
      <Text>Copyright 2022, All right reserved</Text>
    </chakra.footer>
  );
}
