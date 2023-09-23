import { Box, Container, Typography } from "@mui/material";
import BookReader from "./BookReader";
import axios from "axios";
import { useState, useEffect } from "react";

const Page = () => {
  const [chapter, setChapter] = useState(null);
  const chapterId = "64a68a154a96f9cb5c366bd3"; // Initial chapterId

  useEffect(() => {
    const getChapterById = async (chapterId: string) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/chapters/getOne/${chapterId}`
        );
        setChapter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getChapterById(chapterId);
  }, [chapterId]);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <BookReader chapter={chapter} />
      </Box>
    </Container>
  );
};

export default Page;
