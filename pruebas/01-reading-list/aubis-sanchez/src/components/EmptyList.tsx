import { Box } from "@mui/material";

interface EmptyListProps {
  label: string;
}

const EmptyList = ({ label }: EmptyListProps) => {
  return (
    <Box
      component="div"
      height="100%"
      minHeight="80vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={24}
      color="GrayText"
      border="1px solid rgba(145,159,144,0.1)"
      borderRadius="6px"
    >
      {label}
    </Box>
  );
};
export default EmptyList;
