import React, { useState } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const NoteEdit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const data = {
      title,
      description: desc,
    };
    try {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(res);
      router.push("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DynamicLayout>
      <Box
        maxWidth="50%"
        margin="1rem 0"
        display="flex"
        justifyContent="space-evenly"
        flexFlow="column"
      >
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          margin="1rem 0"
        />
        <Textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          margin="1rem 0"
        ></Textarea>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </DynamicLayout>
  );
};

export default NoteEdit;
