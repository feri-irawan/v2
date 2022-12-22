import { Box, chakra, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TextUnderline from "./TextUnderline";

const menus = ["About", "Projects", "Skills", "Community", "Contact"];

function MenuItem({ name }) {
  const route = useRouter().asPath.slice(1);
  const url = "#" + name.toLowerCase();

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
          maxW="lg"
          p="1.5rem 1rem"
          display="flex"
          justifyContent="space-between"
        >
          {menus.map((name, i) => (
            <MenuItem name={name} key={i} />
          ))}
        </Container>
      </chakra.header>
    )
  );
}
