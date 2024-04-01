import * as React from "react";
import Box from "@mui/joy/Box";

import HeroLeft01 from "../HeroLeft01";
import HeroLeft02 from "../HeroLeft02";
import ContactBar from "../layout/ContactBar";

export default function Home() {
  return (
    <>
      {/* <ColorSchemeToggle /> */}
      <ContactBar />

      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          "& > div": {
            scrollSnapAlign: "start",
          },
        }}
      >
        asddddss
        <HeroLeft01 />
        <HeroLeft02 />
      </Box>
    </>
  );
}
