import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Menu from "@/components/nav";

const Layout = ({ children, pageTitle, metaTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Home"}</title>
        <meta
          name="description"
          content={metaTitle ? metaTitle : "Generated by create next app"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
