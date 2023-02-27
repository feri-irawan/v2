import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import SectionTitle from "../../components/SectionTitle";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPosts = async () => {
    setPosts([]);
    setLoading(true);
    await axios.get("/api/posts").then(({ data }) => setPosts(data));
    setLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout title="Posts" pt="2.5rem">
      <SectionTitle>Posts</SectionTitle>

      <Text align="center">{loading && "Loading..."}</Text>

      <SimpleGrid columns={{ sm: 2 }} gap="1rem">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
