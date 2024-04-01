import { Theme, extendTheme } from "@mui/joy/styles";
// import { iconButtonClasses } from "@mui/joy/IconButton";

// background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);

const theme: Theme = extendTheme({
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       background: {
  //         body: "transparent",
  //       },
  //     },
  //   },
  // },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#F2F7FF",
          100: "#DCEBFE",
          200: "#BDDAFE",
          300: "#91C3FC",
          400: "#60A5FA",
          500: "#3479E8",
          600: "#2362EA",
          700: "#1D4FD7",
          800: "#1D3FAE",
          900: "#1E3B8A",
          solidBg: "var(--joy-palette-primary-600)",
          solidHoverBg: "var(--joy-palette-primary-500)",
          solidActiveBg: "var(--joy-palette-primary-400)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#1D223F",
          100: "#0A318C",
          200: "#1347CC",
          300: "#1055EA",
          400: "#357AEA",
          500: "#2E88F6",
          600: "#50A1FF",
          700: "#7AB7FF",
          800: "#DCEBFE",
          900: "#F0F6FF",
          solidBg: "var(--joy-palette-primary-700)",
          solidColor: "var(--joy-palette-common-black)",
          solidHoverBg: "var(--joy-palette-primary-600)",
          solidActiveBg: "var(--joy-palette-primary-400)",
        },
        background: {
          body: "var(--joy-palette-common-black)",
          surface: "var(--joy-palette-neutral-900)",
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "--Button-iconOffsetStep": 0,
          ...(ownerState.variant === "solid" && {
            "&.Mui-focusVisible, &:focus-visible": {
              outlineOffset: "-3px",
              outlineColor: "#fff",
            },
          }),
          ...(ownerState.variant === "outlined" && {
            "&.Mui-focusVisible, &:focus-visible": {
              outlineOffset: "-3px",
            },
          }),
          ...(ownerState.size === "md" && {
            "--Icon-fontSize": "20px",
            fontSize: "14px",
            fontWeight: 600,
            minHeight: "32px",
            borderRadius: "2px",
            paddingLeft: 20,
            paddingRight: 20,
          }),
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: () => ({
          "&:hover": {
            backgroundColor: "transparent",
          },
        }),
      },
    },
  },
});

export default theme;
