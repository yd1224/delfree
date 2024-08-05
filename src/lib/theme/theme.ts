import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  styles: {
    global: {
      "input::placeholder, textarea::placeholder": {
        color: "grey",
      },
    },
  },
  breakpoints,
});
