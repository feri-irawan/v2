import { Box, Heading, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import axios from "axios";
import Layout from "../../components/Layout";
import OtherPosts from "../../components/OtherPosts";

export default function BySlug({
  title,
  content,
  summary,
  published,
  thumbnail,
  others,
}) {
  return (
    <Layout title={title} desc={summary} thumbnail={thumbnail}>
      <Box>
        <Heading>{title}</Heading>
        <Text opacity=".5">
          Dipublikasi pada {new Date(published).toLocaleDateString("id-ID")}
        </Text>

        <Prose mt="1rem">
          <Box dangerouslySetInnerHTML={{ __html: content }} />
        </Prose>
      </Box>

      <Box mt="2rem">
        <Box pos="sticky" top="1rem">
          <OtherPosts posts={others} />
        </Box>
      </Box>
    </Layout>
  );
}

/** @type {import("next").GetServerSideProps} */
export async function getServerSideProps({ req, query }) {
  const host = "//" + req.headers.host;
  const slug = query.slug;

  // Mendapatkan semua postingan
  const max = 5;
  const posts = await axios
    .get(host + "/api/posts")
    .then(({ data }) => data.sort(() => Math.random() - 0.5).slice(0, max));

  // Mendapatkan postingan
  const post = await axios
    .get(host + "/api/posts?slug=" + slug)
    .then(({ data }) => data);

  return {
    props: {
      ...post,
      others: posts,
    },
  };
}
