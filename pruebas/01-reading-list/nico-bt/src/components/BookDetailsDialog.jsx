import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Close from "@mui/icons-material/Close"

const styleDialogText = { fontSize: "1.3rem", lineHeight: 1.6, marginTop: 2, color: "black" }

export default function BookDetailsDialog({ open, setOpen, book, handleClickAddToList }) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        bgcolor={"#1f1d1c"}
        color={"white"}
        style={{
          fontWeight: 600,
          fontSize: "1.6rem",
          letterSpacing: "3px",
          marginBottom: "0.5rem",
        }}
      >
        {book?.title}

        <span
          style={{
            background: "none",
            color: "white",
            position: "absolute",
            top: 0,
            right: 4,
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <Close fontSize="big" />
        </span>
      </DialogTitle>

      <DialogContent style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <DialogContentText sx={styleDialogText}>{book?.synopsis}</DialogContentText>
          <DialogContentText sx={styleDialogText}>Author: {book?.author?.name}</DialogContentText>
          <DialogContentText sx={styleDialogText}>Genre: {book?.genre}</DialogContentText>
          <DialogContentText sx={styleDialogText}>Year: {book?.year}</DialogContentText>
        </div>
        <img src={book?.cover} />
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            handleClickAddToList(book)
            handleClose()
          }}
          style={{ background: "darkgreen" }}
        >
          Add to List
        </Button>
      </DialogActions>
    </Dialog>
  )
}
