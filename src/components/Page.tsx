import { Box, Container, Typography } from '@mui/material';
import BookReader from './BookReader';

const Page = () => {
  const paragraph = "Năm 1998, ông được Nhà xuất bản Kim Đồng trao giải Nhà văn có sách bán chạy nhất. Năm 2003, bộ truyện nhiều tập Kính vạn hoa được Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh trao huy chương Vì thế hệ trẻ và được Hội Nhà Văn Việt Nam trao giải thưởng. Đến nay ông đã xuất bản gần 100 tác phẩm và từ lâu đã trở thành nhà văn thân thiết của các bạn đọc nhỏ tuổi ở Việt Nam."
  const book = paragraph.split(" ");
  console.log(book);

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <Typography>Tên chương</Typography>
        <BookReader book={book} />
      </Box>
    </Container>
  );
};

export default Page;
