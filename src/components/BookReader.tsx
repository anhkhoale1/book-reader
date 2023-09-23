import {
  Box,
  Card,
  Typography,
  Slider,
  Button,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

interface ChapterProps {
  chapter: any;
}

const BookReader = (props: ChapterProps) => {
  const { chapter } = props;
  const chapterContent = chapter?.chaper_content || "";
  const chapterName = chapter?.chapter_name;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const play = (): void => {
    setIsPlaying(true);
  };

  const pause = (): void => {
    setIsPlaying(false);
  };

  const onNextWord = (): void => {
    if (currentWordIndex < chapterContent.length - 1) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  };

  const onPreviousWord = (): void => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updateCurrentWord = (): void => {
      if (currentWordIndex < chapterContent.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsPlaying(false);
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
  }, [isPlaying, currentWordIndex, chapterContent]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">{chapterName}</Typography>
      <Card
        sx={{
          width: "200px",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography variant="h6">
          {chapterContent.split(" ")[currentWordIndex]}
        </Typography>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <IconButton onClick={onPreviousWord}>
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
        <IconButton onClick={onNextWord}>
          <SkipNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BookReader;
