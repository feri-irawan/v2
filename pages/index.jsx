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
import { motion } from "framer-motion";

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
      <SimpleGrid columns={{ base: 2, sm: 3 }} gap=".5rem">
        {[
          {
            categoryName: "",
            items: [
              [
                "HTML5",
                "https://static-00.iconduck.com/assets.00/file-type-html-icon-226x256-lud8fl1p.png",
              ],
              [
                "CSS3",
                "https://static-00.iconduck.com/assets.00/file-type-css-icon-226x256-ytqdyr76.png",
              ],
              [
                "SASS",
                "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
              ],
              [
                "JavaScript",
                "https://static-00.iconduck.com/assets.00/javascript-icon-256x256-8sn98o22.png",
              ],
              [
                "Bootstrap",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/250px-Bootstrap_logo.svg.png",
              ],
              [
                "Tailwind",
                "https://static-00.iconduck.com/assets.00/tailwind-css-icon-256x154-bhw4dmbr.png",
              ],
              [
                "Chakra UI",
                "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67",
              ],
            ],
          },
          {
            categoryName: "",
            items: [
              [
                "Node.JS",
                "https://static-00.iconduck.com/assets.00/nodejs-original-icon-226x256-b4xset3r.png",
              ],
              [
                "Next.JS",
                "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
              ],
              [
                "PHP",
                "https://static-00.iconduck.com/assets.00/php-original-icon-256x135-m9j2mnet.png",
              ],
              [
                "Express",
                "https://santrikoding.com/storage/categories/wQVS3Ru4M9BqZIQlQZc0q3NZDJOLjla9QWw61JVx.png",
              ],
              [
                "Fastify",
                "https://avatars.githubusercontent.com/u/24939410?s=100&v=4",
              ],
              [
                "TypeScript",
                "https://static-00.iconduck.com/assets.00/typescript-icon-icon-256x256-ohttv0b8.png",
              ],
            ],
          },
          {
            categoryName: "",
            items: [
              [
                "Github",
                "https://static-00.iconduck.com/assets.00/github-icon-256x249-eb1fu3cu.png",
              ],
              [
                "Git",
                "https://static-00.iconduck.com/assets.00/git-icon-256x256-nki51ae3.png",
              ],
              [
                "NPM",
                "https://static-00.iconduck.com/assets.00/npm-icon-256x256-3sbhpy7x.png",
              ],
              [
                "Postman",
                "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
              ],
              [
                "Visual Studio Code",
                "https://static-00.iconduck.com/assets.00/file-type-vscode-icon-256x254-n2qz4hp8.png",
              ],
              [
                "Sublime Text",
                "https://www.sublimehq.com/images/sublime_text.png",
              ],
              [
                "Figma",
                "https://static-00.iconduck.com/assets.00/figma-icon-171x256-cm2xsty6.png",
              ],
            ],
          },
        ].map((category, i) => (
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
            "https://pinisidev.vercel.app/images/pinisidev.png",
            "Komunitas IT pemuda pemudi Bulukumba",
            "//github.com/PinisiDev",
          ],
          [
            "Bellshade",
            "https://avatars.githubusercontent.com/u/76999048?s=200&v=4",
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
      <SimpleGrid
        gap="8rem"
        as={motion.div}
        initial={{
          filter: "blur(2rem)",
          opacity: 0,
          scale: 0,
          translateY: "100%",
        }}
        animate={{
          opacity: 1,
          filter: ["blur(2rem)", "blur(2rem)", "blur(0)"],
          scale: [0, 1.1, 1],
          translateY: ["100%", "0%", "0%"],
        }}
      >
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
