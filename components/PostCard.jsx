import { Box, Center, chakra, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function PostCard({
  title,
  summary,
  published,
  slug,
  thumbnail,
}) {
  return (
    <chakra.article>
      <Center
        shadow="0 .5rem 5rem rgba(44, 255, 52, 0.15)"
        bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
        p=".15rem"
        h="9rem"
        rounded=".5rem"
      >
        <Center boxSize="full" bg="#1E1E1E" rounded="inherit" overflow="hidden">
          <Image
            src={thumbnail}
            alt={thumbnail ? title : "<No Thumbnail />"}
            boxSize={thumbnail && "full"}
            objectFit="cover"
          />
        </Center>
      </Center>
      <Box pt="1rem">
        <Link href={"/posts/" + slug}>
          <Heading size="md">{title}</Heading>
        </Link>
        <Text opacity=".5" mb=".5rem">
          Dipublikasi pada {new Date(published).toLocaleDateString("id-ID")}
        </Text>
        <Text>{summary}</Text>
      </Box>
    </chakra.article>
  );
}
