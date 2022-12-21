import Head from "next/head";
import { Inconsolata } from "@next/font/google";
import Header from "./Header";
import { Container } from "@chakra-ui/react";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Layout({ title, children }) {
  return (
    <div className={inconsolata.className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Feri Irawan personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </div>
  );
}
