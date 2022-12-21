import { Box, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  return (
    <chakra.header
      display="flex"
      justifyContent="space-between"
      p="1.5rem 1rem 0"
    >
      {menus.map((name, i) => (
        <MenuItem name={name} key={i} />
      ))}
    </chakra.header>
  );
}
