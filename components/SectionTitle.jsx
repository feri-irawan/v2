import { chakra } from "@chakra-ui/react";
import TextUnderline from "./TextUnderline";

export default function SectionTitle({ children }) {
  return (
    <chakra.h2 fontSize={25} textAlign="center" mb="1rem" fontWeight="bold">
      <TextUnderline bottom=".1rem">{children}</TextUnderline>
    </chakra.h2>
  );
}
