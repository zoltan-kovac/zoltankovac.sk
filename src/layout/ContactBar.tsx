import * as React from "react";
import {
  LinkedinOption,
  // MailOption
} from "grommet-icons";
import { Stack } from "@mui/joy";
// import { ContactBarIconButton } from "../components/Icon";

type ContactBarProps = {};

const ContactBar: React.FC<ContactBarProps> = (): JSX.Element => {
  return (
    <Stack direction="row" spacing={1}>
      <LinkedinOption />

      {/* <ContactBarIconButton
        aria-label="linkedin"
        href="https://www.linkedin.com/in/zoltankovac/"
        target="_blank"
      >
        <LinkedinOption />
      </ContactBarIconButton> */}
      {/* <ContactBarIconButton
        aria-label="email"
        href="mailto:zoltan.kovac@outlook.com"
      >
        <MailOption />
      </ContactBarIconButton> */}
    </Stack>
  );
};

export default ContactBar;
