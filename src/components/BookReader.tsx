import { Box, ButtonGroup, Card, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";

interface BookProps {
  book: string[];
}

const BookReader = (props: BookProps) => {
  const { book } = props;
  const [currentWord, setCurrentWord] = useState(book[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (): void => {
    setIsPlaying(true);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updateCurrentWord = (): void => {
      if (currentIndex < book.length) {
        setCurrentWord(book[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId!);
        intervalId = null;
      }
    };

    if (isPlaying) {
      intervalId = setInterval(updateCurrentWord, 200);
    }

    return () => {
      clearInterval(intervalId!);
    };
  }, [isPlaying, currentIndex, book]);

  const pause = (): void => {
    setIsPlaying(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "200px",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography>{currentWord}</Typography>
      </Card>
      <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        {isPlaying ? (
          <IconButton onClick={pause}>
            <PauseIcon />
          </IconButton>
        ) : (
          <IconButton onClick={play}>
            <PlayArrowIcon />
          </IconButton>
        )}
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

export default BookReader;
