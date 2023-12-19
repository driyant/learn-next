import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home |</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
    </ul>
  );
};

export default Menu;
