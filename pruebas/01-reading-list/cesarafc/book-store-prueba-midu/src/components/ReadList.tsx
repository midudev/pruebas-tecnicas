import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import React, { ReactNode, useState } from "react";

type ReadListProps = {
  children: ReactNode,
  listLenght: number
}

function ReadList({children, listLenght}: ReadListProps) {

    const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <Box>
        <React.Fragment key={'right'}>
          {/* Cambiar a icono?  */}
        <Button sx={{marginY: 2}} variant="outlined" onClick={() => setToggleDrawer(true)}>Lista de lectura ({listLenght})</Button>
        <Drawer anchor={"right"} open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
          <Container
            sx={{
              minHeight: "100vh",
              width: 500,
              padding: 4,
            }}
          > 

            <Typography variant="h4">Lista de lectura ({listLenght})</Typography>
            {children}
          </Container>
        </Drawer>
        </React.Fragment>
    </Box>
  );
}

export default ReadList