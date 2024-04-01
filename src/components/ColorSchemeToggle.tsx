import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";
import { Moon, Sun } from "grommet-icons";

enum colorMode {
  dark = "dark",
  light = "light",
}

export function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      id="toggle-mode"
      title="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === colorMode.light) {
          setMode(colorMode.dark);
        } else {
          setMode(colorMode.light);
        }
      }}
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "1rem",
        right: "1rem",
        borderRadius: "50%",
        boxShadow: "sm",
      }}
    >
      {mode === colorMode.light ? <Moon /> : <Sun />}
    </IconButton>
  );
}
