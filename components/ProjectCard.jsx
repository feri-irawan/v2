import { Box, chakra, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ data, reverse }) {
  return (
    <Flex
      display={{ base: "flex", sm: "block" }}
      flexDir={reverse && "row-reverse"}
    >
      <Box mb={{ sm: "1rem" }}>
        <Box pos="relative">
          <Box
            boxSize={{ base: 120, sm: "full" }}
            minH={{ sm: 120 * 1.6 }}
            border=".1rem solid #2CFF34"
            bg="#2CFF340D"
            rounded=".5rem"
          />
          <chakra.a
            pos="absolute"
            right=".5rem"
            bottom=".5rem"
            title="Github"
            href="#"
            target="_blank"
            display="inline-block"
            fontSize={20}
          >
            <FaGithub />
          </chakra.a>
        </Box>
      </Box>
      <Box
        pl={!reverse && { base: "1rem", sm: 0 }}
        pr={reverse && { base: "1rem", sm: 0 }}
      >
        <chakra.h3
          fontWeight="bold"
          fontSize={20}
          lineHeight="1.2rem"
          mb=".5rem"
        >
          Lorem ipsum dolor sit amet.
        </chakra.h3>
        <chakra.p lineHeight="1rem" mb="1rem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          ratione!
        </chakra.p>
      </Box>
    </Flex>
  );
}
