import { Box, chakra, Flex, SimpleGrid, Text } from "@chakra-ui/react";

function SkillItem({ data }) {
  return (
    <Flex>
      <Box
        bgImg={`url(${data[1]})`}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        bgColor={!data[1] && "#2CFF340D"}
        boxSize={25}
        rounded={!data[1] && ".5rem"}
      />
      <Text
        ml=".5rem"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        w="75%"
      >
        {data[0]}
      </Text>
    </Flex>
  );
}

export default function SkillsContainer({ data }) {
  const { categoryName, items } = data;

  return (
    <Box mx={{ sm: "auto" }}>
      <chakra.h2 fontSize={20} fontWeight="bold">
        {categoryName}
      </chakra.h2>

      <SimpleGrid gap=".5rem">
        {items.map((item, i) => (
          <SkillItem key={i} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
