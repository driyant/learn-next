import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const Users = (props) => {
  console.log(props);
  return (
    <DynamicLayout>
      <ul>
        {props.users?.map((user) => {
          return (
            <li>
              {user.first_name} | {user.email}
            </li>
          );
        })}
      </ul>
    </DynamicLayout>
  );
};

export default Users;

export async function getServerSideProps() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();

    return {
      props: { users: data.data },
    };
  } catch (error) {
    console.log(error);
  }
}
