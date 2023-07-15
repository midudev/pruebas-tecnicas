import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="article"
      height="auto"
      minHeight="80vh"
      width="90%"
      border={1}
      borderColor="rgba(145,159,144,0.1)"
      borderRadius="6px"
      color="white"
      m="auto"
      p={2}
      mb={4}
    >
      {children}
    </Box>
  );
};
