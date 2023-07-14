import { Box, Typography } from "@mui/material";
import { Books, LectureList, Switch } from "./components";
import { useState } from "react";
import { Views } from "./models";
import { Toaster } from "sonner";

function App() {
  const [sectionOnView, setSectionOnView] = useState<Views>(Views.books);

  return (
    <main className="container">
      <Typography variant="h1" color="orange" fontSize={60}>
        Welcome to the Bookstore
      </Typography>
      <Switch
        sectionOnView={sectionOnView}
        setSectionOnView={setSectionOnView}
      />
      <Box
        component="section"
        display="flex"
        flexDirection="row"
        width="100%"
        height="100%"
      >
        {sectionOnView === Views.books ? <Books /> : <LectureList />}
      </Box>
      <Toaster richColors position="bottom-right" closeButton duration={2000} />
    </main>
  );
}

export default App;
