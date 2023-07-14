import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="article"
      height="auto"
      minHeight="80vh"
      width="100%"
      border={1}
      borderColor="rgba(145,159,144,0.1)"
      borderRadius="6px"
      color="white"
      p={2}
    >
      {children}
    </Box>
  );
};
