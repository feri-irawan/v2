import { Box, chakra, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import Layout from "../components/layout";
import SectionTitle from "../components/SectionTitle";
import SocialMedia from "../components/SocialMedia";
import TextUnderline from "../components/TextUnderline";

function HeroSection() {
  return (
    <chakra.section pt="3rem" pb="5rem">
      <SimpleGrid columns={2}>
        <Box>
          <Text fontSize={20}>Hi, i am</Text>
          <Text
            fontSize={28}
            fontWeight="bold"
            w="max-content"
            bgGradient="linear(90deg, #2CFF34 0%, #2C5AFF 82.34%)"
            bgClip="text"
            mb="1rem"
          >
            Feri Irawan
          </Text>
          <Text fontSize={18} fontWeight="bold" pb="1rem">
            Making something to help lots of people
          </Text>
        </Box>
        <Box>
          <Box
            ml="auto"
            display="block"
            w="full"
            maxW={154}
            h="full"
            maxH={154}
            bg="rgba(44, 255, 52, 0.05)"
            bgImg="url('/images/feri-irawan.jpg')"
            bgSize="cover"
            border="1.5px solid #2CFF34"
            rounded={8}
            overflow="hidden"
          />
        </Box>
      </SimpleGrid>
    </chakra.section>
  );
}

function AboutSection() {
  return (
    <chakra.section>
      <SectionTitle>About Me</SectionTitle>
      <chakra.p textAlign="center" mb="1.5rem">
        A <TextUnderline>web developer</TextUnderline> who is still in high
        school, has been in the computer world since 6th grade. Enjoy making
        program code or applications that can be useful for many people.
      </chakra.p>

      <SocialMedia />
    </chakra.section>
  );
}

export default function Home() {
  return (
    <Layout title="Hi, i am Feri Irawan 👋🏻">
      <HeroSection />
      <AboutSection />
    </Layout>
  );
}
