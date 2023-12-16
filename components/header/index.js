import React from "react";
import withAuth from "../with-auth";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <div>
        <Heading as="h3" size="lg">
          Header Component
        </Heading>
      </div>
    </>
  );
};

export default withAuth(Header);
