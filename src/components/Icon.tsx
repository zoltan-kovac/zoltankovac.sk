import { IconButton, IconButtonProps, styled } from "@mui/joy";
import { HTMLMotionProps, motion } from "framer-motion";
import * as React from "react";

const StyledIconButton = styled(IconButton)<
  IconButtonProps<"a"> & HTMLMotionProps<"a">
>(
  ({
    theme,
    // "aria-pressed": pressed = "false"
  }) => ({
    "> svg": {
      fill: theme.palette.primary[400],
      stroke: theme.palette.primary[400],
      //   padding: "0.5rem 1rem",
      //   borderRadius: theme.vars.radius.sm,
      //   display: "inline-flex",
      //   justifyContent: "center",
      //   gap: "8px",
      //   minHeight: 40,
      //   fontFamily: theme.vars.fontFamily.body,
      //   fontSize: theme.vars.fontSize.md,
      //   fontWeight: theme.vars.fontWeight.md,
      //   alignItems: "center",
      //   border: "1px solid",
      //   borderColor: theme.vars.palette.neutral.outlinedBorder,
      //   backgroundColor: theme.vars.palette.background.body,
      //   boxShadow: theme.vars.shadow.md,
      //   [theme.focus.selector]: theme.focus.default,
      //   ...theme.variants.plain.neutral,
      //   ...(pressed === "false" && {
      //     "&:hover": theme.variants.plainHover.neutral,
      //     "&:active": theme.variants.plainActive.neutral,
      //   }),
      //   ...(pressed === "true" && {
      //     color: theme.vars.palette.danger.plainColor,
      //     backgroundColor: theme.vars.palette.background.body,
      //     boxShadow: theme.shadow.sm.replace(/,/g, ", inset"),
      //   }),
    },
  })
);

export const ContactBarIconButton: React.FC<{
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}> = ({ children, ...props }): JSX.Element => {
  return (
    <StyledIconButton
      variant="plain"
      component={motion.a}
      size="lg"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};
