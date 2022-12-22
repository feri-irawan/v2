import { chakra } from "@chakra-ui/react";

export default function TextUnderline({ children, bottom = 0 }) {
  return (
    <chakra.span pos="relative" display="inline">
      <chakra.span pos="relative" zIndex={1}>
        {children}
      </chakra.span>
      <chakra.span
        pos="absolute"
        bottom={bottom}
        left="-.01rem"
        w="full"
        h=".3rem"
        bg="linear-gradient(90deg, rgba(44, 255, 52, 0.54) 0%, rgba(44, 90, 255, 0.54) 100%)"
        display="inline-block"
      />
    </chakra.span>
  );
}
