import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface BookProps {
  book: string[];
}

const BookReader = (props: BookProps) => {
  const { book } = props;
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < book.length) {
        setCurrentWord(book[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, book]);

  return (
    <>
      <Typography>{currentWord}</Typography>
    </>
  );
};

export default BookReader;
