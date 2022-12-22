import { Box, chakra, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ data, reverse }) {
  return (
    <Flex
      display={{ base: "flex", sm: "block" }}
      flexDir={reverse && "row-reverse"}
      justify={reverse && "space-between"}
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
          <Box bgColor="#1E1E1E" rounded="inherit" boxSize="full">
            <Box
              boxSize="full"
              bgColor="rgba(44, 255, 52, 0.05)"
              bgImg={`url('${data?.image}')`}
              bgSize="cover"
              bgPos="center"
              rounded="inherit"
            />
          </Box>
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
          href={data?.html_url || "#"}
          target="_blank"
          color="#2CFF34"
          _hover={{ textDecor: "underline" }}
        >
          <chakra.h3
            wordBreak="break-word"
            fontWeight="bold"
            fontSize={20}
            lineHeight="1.2rem"
            mb=".5rem"
          >
            {/* On Base */}
            <chakra.span display={{ sm: "none" }}>
              {data?.name?.length > 35
                ? data?.name.slice(0, 35) + "..."
                : data?.name}
            </chakra.span>
            {/* On SM */}
            <chakra.span display={{ base: "none", sm: "block" }}>
              {data?.name?.length > 39
                ? data?.name.slice(0, 39) + "..."
                : data?.name}
            </chakra.span>
          </chakra.h3>
        </chakra.a>

        <chakra.p lineHeight="1.1rem" wordBreak="break-word">
          {/* On Base */}
          <chakra.span display={{ sm: "none" }}>
            {data?.description?.length > 93
              ? data?.description.slice(0, 93) + "..."
              : data?.description}
          </chakra.span>
          {/* On SM */}
          <chakra.span display={{ base: "none", sm: "block" }}>
            {data?.description?.length > 101
              ? data?.description.slice(0, 101) + "..."
              : data?.description}
          </chakra.span>
        </chakra.p>
      </Box>
    </Flex>
  );
}
