import { chakra } from "@chakra-ui/react";

export default function Section(props) {
  const offset = "5rem"; //Sticky header height
  return <chakra.section {...props} mt={"-" + offset} pt={offset} />;
}
