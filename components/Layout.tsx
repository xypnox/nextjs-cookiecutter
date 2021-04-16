import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { deploy_url, name, tagline } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MetaData } from "../types";

export const siteTitle = { name };

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
`;

const Main = styled.div`
  padding: 0 0.5rem;

  font-size: 20px;

  p {
    font-weight: 400;
  }
`;

interface LayoutProps {
  children?: React.ReactNode;
  metadata?: MetaData;
}

export default function Layout({ children, metadata }: LayoutProps) {
  const data = {
    title: metadata?.title ?? name,
    url: deploy_url + (metadata?.url ?? ""),
    description: metadata?.description ?? tagline,
    image: metadata?.image || "https://source.unsplash.com/1600x900/?tech",
  };
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <title>{name}</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.url} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data.url} />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.description} />
        <meta property="twitter:image" content={data.image} />
      </Head>

      <Navbar />

      <Main>{children}</Main>

      <Footer />
    </LayoutContainer>
  );
}
