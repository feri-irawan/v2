import { Box, chakra } from "@chakra-ui/react";

export default function CommunityCard({ data }) {
  return (
    <Box textAlign="center">
      <Box
        mx="auto"
        bgImg={`url(${data[1]})`}
        bgSize="contain"
        bgPos="center"
        bgColor="#2CFF34"
        boxSize="3rem"
        rounded=".5rem"
        mb=".5rem"
      />

      <chakra.h2 fontSize={20} fontWeight="bold">
        <chakra.a href={data[3]} target="_blank">
          {data[0]}
        </chakra.a>
      </chakra.h2>
      <chakra.p>{data[2]}</chakra.p>
    </Box>
  );
}
