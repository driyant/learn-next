import React from "react";
import withAuth from "../with-auth";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div>
        <Image
          src="https://cdn.pixabay.com/photo/2015/02/14/19/46/winter-landscape-636634_1280.jpg"
          alt="background"
          width={500}
          height={500}
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/16/23/10/snow-leopard-1985510_640.jpg"
          alt="second-image"
        />
        <Heading as="h3" size="lg">
          Header Component
        </Heading>
      </div>
    </>
  );
};

export default withAuth(Header);
