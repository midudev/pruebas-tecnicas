import { Box, Button, Slide } from "@mui/material";
import { Views } from "../models";

interface Props {
  sectionOnView: Views;
  setSectionOnView: React.Dispatch<React.SetStateAction<Views>>;
}

export const Switch = ({ sectionOnView, setSectionOnView }: Props) => {
  return (
    <Box component="div" display="flex" flexDirection="row" width="100%">
      <Button
        onClick={() => setSectionOnView(Views.books)}
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: sectionOnView === Views.books ? "center" : "flex-end",
          textAlign: "right",
          transitionDuration: 600,
          color: sectionOnView === Views.books ? "white" : "primary",
          bgcolor:
            sectionOnView === Views.books
              ? "rgba(38,91,167,1)"
              : "rgba(255,255,255,0.08)",
        }}
      >
        Available books
      </Button>
      <Button
        onClick={() => setSectionOnView(Views.list)}
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: sectionOnView === Views.list ? "center" : "start",
          textAlign: "left",
          transitionDuration: 600,
          color: sectionOnView === Views.list ? "white" : "primary",
          bgcolor: sectionOnView === Views.list ? "rgba(38,91,167,1)" : "",
        }}
      >
        Lecture list
      </Button>
    </Box>
  );
};
