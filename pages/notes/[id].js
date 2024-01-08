import React, { useEffect, useState } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const NoteEdit = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchNote = async () => {
    try {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/${router.query.id}`
      );
      const data = await res.json();
      setTitle(data.data.title);
      setDescription(data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const data = {
      title,
      description,
    };
    try {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${router.query.id}`,
        {
          method: "PATCH",
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

  console.log(title);

  useEffect(() => {
    setTimeout(() => {
      fetchNote();
    }, 1000);
  }, []);

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
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="1rem 0"
        />
        <Textarea
          placeholder="Description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="1rem 0"
        ></Textarea>
        <Button onClick={handleUpdate}>Update</Button>
      </Box>
    </DynamicLayout>
  );
};

export default NoteEdit;
