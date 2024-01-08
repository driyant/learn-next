import React, { useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

const Notes = (props) => {
  const [notes, setNotes] = useState(props.notes.data);
  const router = useRouter();

  const handleDelete = async (noteId) => {
    console.log(noteId);
    try {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${noteId}`,
        {
          method: "DELETE",
        }
      );
      console.log(res);
      fetchNote();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNote = async () => {
    try {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes"
      );
      const notes = await res.json();
      setNotes(notes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DynamicLayout>
      <Heading as="h5">List of Notes</Heading>
      <Button
        marginBottom="1rem"
        marginTop="1rem"
        onClick={() => router.push("/notes/create")}
      >
        {" "}
        + Add Notes
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Operation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {notes?.map((note) => {
              return (
                <Tr key={note.id}>
                  <Td>{note.title}</Td>
                  <Td>{note.description}</Td>
                  <Td isNumeric display="flex" flexFlow="row">
                    <Box
                      marginRight="1rem"
                      cursor="pointer"
                      onClick={() => handleDelete(note.id)}
                    >
                      <DeleteIcon />
                    </Box>
                    <Box as={Link} cursor="pointer" href={`/notes/${note.id}`}>
                      <EditIcon />
                    </Box>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </DynamicLayout>
  );
};

export default Notes;

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://paace-f178cafcae7b.nevacloud.io/api/notes"
    );
    const notes = await response.json();
    return {
      props: { notes },
    };
  } catch (error) {
    console.log(error);
  }
}
