import { TextField } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState("");
  return (
    <header>
      <nav>
        <h1>Books.com</h1>
        <TextField label="Search" size="small" value={value} />
      </nav>
    </header>
  );
};
