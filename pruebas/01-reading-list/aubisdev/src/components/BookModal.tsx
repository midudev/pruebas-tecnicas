import { Box, Typography, Modal } from "@mui/material";
import { Book } from "../models";

interface ModalProps {
  book: Book;
  handleCloseModal: () => void;
  openModal: boolean;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 500 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export function BookModal({ book, handleCloseModal, openModal }: ModalProps) {
  return (
    <div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <img
            src={book.cover}
            alt={book.title}
            style={{ width: "50%", objectFit: "cover" }}
          />
          <Box
            width="50%"
            display="flex"
            alignItems="center"
            margin="auto"
            flexDirection="column"
            textAlign="center"
          >
            <Typography variant="h5" component="h2" mb={3}>
              {book.title}
            </Typography>
            <Typography fontSize={14} fontStyle="italic">
              By: {book.author.name}
            </Typography>
            <Typography fontSize={14} fontStyle="italic">
              Released in {book.year}
            </Typography>
            <Typography fontSize={14} fontStyle="italic">
              {book.genre}
            </Typography>
            <Typography fontSize={14} fontStyle="italic">
              {book.pages} pages
            </Typography>
            <Typography sx={{ mt: 2, px: 1 }}>{book.synopsis}</Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
