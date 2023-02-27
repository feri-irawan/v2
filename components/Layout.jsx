import Head from "next/head";
import { Inconsolata } from "@next/font/google";
import Header from "./Header";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Layout({ title, desc, thumbnail, children }) {
  return (
    <div className={inconsolata.className}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={desc ?? "Feri Irawan personal website."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {thumbnail && (
          <>
            <meta name="image" content={thumbnail} />
            <meta name="og:image" content={thumbnail} />
            <meta name="twitter:image" content={thumbnail} />
          </>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <Container maxW="xl" minH="80vh" pb="4rem">
          <main>{children}</main>
        </Container>
        <Footer />
      </>
    </div>
  );
}
