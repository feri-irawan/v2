import { Box } from "@chakra-ui/react";

export function HorizontalDivide() {
  return (
    <Box
      mx="auto"
      h={1}
      w="50%"
      bgGradient="linear(90deg, rgba(0, 0, 0, 0) -2.5%, #2CFF34 48.75%, rgba(0, 0, 0, 0) 100%)"
    />
  );
}
