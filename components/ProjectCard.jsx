import { Box, chakra, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ data, reverse }) {
  return (
    <Flex
      display={{ base: "flex", sm: "block" }}
      flexDir={reverse && "row-reverse"}
      mb="1rem"
    >
      <Box mb={{ sm: "1rem" }}>
        <Box
          pos="relative"
          shadow="0 .5rem 5rem rgba(44, 255, 52, 0.15)"
          bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
          rounded={8}
          boxSize={{ base: 120, sm: 212 }}
          minH={{ sm: 120 * 1.6 }}
          p={{ base: ".2rem", sm: ".3rem" }}
          pl={{ sm: ".35rem" }}
        >
          <Box
            boxSize="full"
            bgColor="#1E1E1E"
            bgImg={`url('${data?.image}')`}
            bgSize="cover"
            bgPos="center"
            rounded="inherit"
          />
          <chakra.a
            pos="absolute"
            right={{ base: ".5rem", sm: ".8rem" }}
            bottom={{ base: ".5rem", sm: ".8rem" }}
            title="Github"
            href={data?.url || "#"}
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
        <chakra.a
          href={data?.url || "#"}
          target="_blank"
          color="#2CFF34"
          _hover={{ textDecor: "underline" }}
        >
          <chakra.h3
            fontWeight="bold"
            fontSize={20}
            lineHeight="1.2rem"
            mb=".5rem"
          >
            {data?.title}
          </chakra.h3>
        </chakra.a>
        <chakra.p lineHeight="1.1rem">
          {data?.desc.length > 90
            ? data?.desc.slice(0, 90) + "..."
            : data?.desc}
        </chakra.p>
      </Box>
    </Flex>
  );
}
