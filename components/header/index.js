import React from "react";
import Menu from "../menu";
import withAuth from "../with-auth";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <div>
        <Heading>This is Header - Raleway</Heading>
        <Menu />
      </div>
    </>
  );
};

export default withAuth(Header);
