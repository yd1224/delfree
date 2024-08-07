import { Box } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./custom-button";

export default function PaginationSmall() {
  return (
    <Box
      display={{
        smmd: "none",
        base: "flex",
      }}
      gap="30px"
      pt="50px"
      alignItems="center"
      justifyContent="center"
    >
      <CustomButton text={"Previous"} />
      <CustomButton text={"Next"} />
    </Box>
  );
}
