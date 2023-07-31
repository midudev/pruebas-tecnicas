import { Button, Container, Drawer, Typography } from "@mui/material";
import React, { useState } from "react"

function ReadList() {

    const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div>
        <React.Fragment key={'right'}>
        <Button variant="contained" onClick={() => setToggleDrawer(true)}>Open</Button>
        <Drawer anchor={"right"} open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
          <Container
            sx={{
              minHeight: "100vh",
              minWidth: 500,
              padding: 4
            }}
          >
            <Typography variant="h4">Lista de lectura</Typography>
            
          </Container>
        </Drawer>
        </React.Fragment>
    </div>
  );
}

export default ReadList