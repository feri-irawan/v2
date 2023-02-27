import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import PostCard from "./PostCard";
import SectionTitle from "./SectionTitle";

export default function OtherPosts({ posts }) {
  return (
    <Box>
      <SectionTitle>Others</SectionTitle>
      <SimpleGrid columns={{ sm: 2 }} gap="1rem">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
