import { Box, chakra, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommunityCard from "../components/CommunityCard";
import ContactForm from "../components/ContactForm";
import { HorizontalDivide } from "../components/Divides";
import HeroImage from "../components/HeroImage";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import SkillsContainer from "../components/SkillsContainer";
import SocialMedia from "../components/SocialMedia";
import TextUnderline from "../components/TextUnderline";
import TypedText from "../components/TypedText";

function HeroSection() {
  return (
    <chakra.section pt="3rem">
      {/* On Base */}
      <Box display={{ base: "block", sm: "none" }} m="0 auto" maxW={250}>
        <Text fontSize={20}>Hi, i am</Text>
        <Text
          fontSize={28}
          fontWeight="bold"
          w="max-content"
          bgGradient="linear(90deg, #2CFF34 0%, #2C5AFF 82.34%)"
          bgClip="text"
        >
          Feri Irawan
        </Text>
        <HeroImage m=".5rem 0 1rem" />
        <Text fontSize={18} pb="1rem" textAlign="center">
          <TypedText
            loop={true}
            typeSpeed={100}
            texts={[
              "Making something to help lots of people",
              "Tetap santuy walau error nggak mau ngalah",
            ]}
          />
        </Text>
      </Box>

      {/* On SM */}
      <SimpleGrid display={{ base: "none", sm: "grid" }} columns={2} gap="1rem">
        <Box>
          <Text fontSize={20}>Hi, i am</Text>
          <Text
            fontSize={35}
            fontWeight="bold"
            w="max-content"
            bgGradient="linear(90deg, #2CFF34 0%, #2C5AFF 82.34%)"
            bgClip="text"
          >
            Feri Irawan
          </Text>
          <Text fontSize={18}>
            <TypedText
              loop={true}
              typeSpeed={100}
              texts={[
                "Making something to help lots of people",
                "Tetap santuy walau error nggak mau ngalah",
              ]}
            />
          </Text>
        </Box>
        <Flex justify="end">
          <HeroImage boxSize={210} />
        </Flex>
      </SimpleGrid>
    </chakra.section>
  );
}

function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <chakra.p textAlign="center" mb="1.5rem">
        A <TextUnderline>web developer</TextUnderline> who is still in high
        school, has been in the computer world since 6th grade. Enjoy making
        program code or applications that can be useful for many people.
      </chakra.p>

      <SocialMedia />
    </Section>
  );
}

function ProjectsSection() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setData();
    setLoading(true);
    setError(false);
    await fetch("/api/projects")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch(() => setError(true));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Text align="center">
        {loading && "Sedang mengambil data..."}
        {error && (
          <>
            Gagal mendapatkan data.{" "}
            <chakra.span color="#2CFF34" onClick={getData}>
              Coba lagi!
            </chakra.span>
          </>
        )}
      </Text>
      <SimpleGrid mt="2rem" columns={{ sm: 2 }} gap="1.5rem">
        {data && data.map((item, i) => <ProjectCard key={i} data={item} />)}
      </SimpleGrid>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SimpleGrid columns={2}>
        {Array(2)
          .fill({
            categoryName: "Title",
            items: Array(5).fill(["Skill title", ""]),
          })
          .map((category, i) => (
            <SkillsContainer key={i} data={category} />
          ))}
      </SimpleGrid>
    </Section>
  );
}

function CommunitySection() {
  return (
    <Section id="community">
      <SectionTitle>Community</SectionTitle>

      <SimpleGrid>
        {[
          [
            "PinisiDev",
            "//dummyimage.com/400x400/1E1E1E/FFFFFF",
            "Komunitas IT pemuda pemudi Bulukumba",
            "//github.com/PinisiDev",
          ],
          [
            "Bellshade",
            "//dummyimage.com/400x400/1E1E1E/FFFFFF",
            "Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia",
            "//github.com/Bellshade",
          ],
        ].map((community, i, arr) => (
          <Box key={i}>
            <CommunityCard data={community} />
            {i !== arr.length - 1 && <HorizontalDivide my="2rem" />}
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>

      <ContactForm />
    </Section>
  );
}

export default function Home() {
  return (
    <Layout title="Hi, i am Feri Irawan 👋🏻">
      <SimpleGrid gap="8rem">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CommunitySection />
        <ContactSection />
      </SimpleGrid>
    </Layout>
  );
}
