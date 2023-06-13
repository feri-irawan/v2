import { Box, chakra, Container } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TextUnderline from "./TextUnderline";

const menus = [
  { name: "Home", url: "/" },
  { name: "Posts", url: "/posts" },
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Skills", url: "/#skills" },
  { name: "Community", url: "/#community" },
  { name: "Contact", url: "/#contact" },
];

function MenuItem({ name, url }) {
  const route = useRouter().asPath;

  return (
    <Link href={url}>
      <Box
        fontSize={{ base: ".9rem", sm: "1rem" }}
        _hover={{ textDecor: "none" }}
      >
        {route === url ? <TextUnderline>{name}</TextUnderline> : name}
      </Box>
    </Link>
  );
}

export default function Header() {
  const [domLoaded, setDomLoaded] = useState();
  useEffect(() => {
    setDomLoaded(true);
  });

  return (
    domLoaded && (
      <chakra.header
        pos="sticky"
        top="0"
        bg="#1E1E1ED9"
        backdropFilter="blur(.5rem)"
        zIndex={10}
      >
        <Container
          maxW="xl"
          p="1.5rem 1rem"
          display="flex"
          justifyContent="space-between"
          overflowX="auto"
          gap="2rem"
        >
          {menus.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </Container>
      </chakra.header>
    )
  );
}
