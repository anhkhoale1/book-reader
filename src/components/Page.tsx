import { Container } from '@mui/material';
import BookReader from './BookReader';

const Page = () => {
  const book = ['This', 'is', 'a', 'sample', 'book'];

  return (
    <Container>
      <BookReader book={book} />
    </Container>
  );
};

export default Page;
