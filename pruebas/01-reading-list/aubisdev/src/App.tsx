import { Box, Typography } from "@mui/material";
import { Books, LectureList, ViewSwitcher } from "./components";
import { useState } from "react";
import { Views } from "./models";
import { Toaster } from "sonner";

function App() {
  const [sectionOnView, setSectionOnView] = useState<Views>(Views.books);

  return (
    <main className="container">
      <Typography
        variant="h1"
        color="AppWorkspace"
        fontSize={{ xs: 28, sm: 40, md: 60 }}
        py={3}
      >
        Welcome to{" "}
        <Box component="span" color="#039296" fontWeight="bold">
          The Library
        </Box>
      </Typography>
      <ViewSwitcher
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
      <Toaster
        richColors
        expand={true}
        position="bottom-right"
        duration={2000}
      />
    </main>
  );
}

export default App;
