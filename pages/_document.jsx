import { chakra } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <chakra.body bg="#1E1E1E" color="#FFFFFF">
        <Main />
        <NextScript />
      </chakra.body>
    </Html>
  );
}
