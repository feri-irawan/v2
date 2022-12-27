import { Box, chakra } from "@chakra-ui/react";

export default function CommunityCard({ data }) {
  return (
    <Box textAlign="center">
      <Box
        shadow="0 .5rem 2rem rgba(44, 255, 52, 0.1)"
        mx="auto"
        bgImg={`url(${data[1]})`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgColor={!data[1] && "rgba(44, 255, 52, 0.15)"}
        boxSize="3rem"
        rounded=".5rem"
        mb=".5rem"
      />

      <chakra.h2 fontSize={20} fontWeight="bold" color="#2CFF34">
        <chakra.a href={data[3]} target="_blank">
          {data[0]}
        </chakra.a>
      </chakra.h2>
      <chakra.p>{data[2]}</chakra.p>
    </Box>
  );
}
