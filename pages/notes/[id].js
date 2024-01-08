import React, { useState } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const NoteEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <DynamicLayout>
      <Box
        maxWidth="50%"
        margin="1rem 0"
        display="flex"
        justifyContent="space-evenly"
        flexFlow="column"
      >
        <Input type="text" placeholder="Title" margin="1rem 0" />
        <Textarea placeholder="Description " margin="1rem 0"></Textarea>
        <Button>Update</Button>
      </Box>
    </DynamicLayout>
  );
};

export default NoteEdit;
