"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
// import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "./layout/TwoSidedLayout";
import { gsap } from "gsap";
import SplitType from "split-type";
import { Box } from "@mui/joy";
import { Skills } from "./components/skills";

function repeat(fn: Function, times: number) {
  fn();
  times && --times && repeat(fn, times);
}

export default function HeroLeft01() {
  React.useEffect(() => {
    const ourText = new SplitType(".our-text", { types: "chars" });
    let chars = ourText?.chars || [];

    // setup timeline
    // const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

    repeat(
      () => chars?.splice((Math.random() * chars.length) | 0, 1),
      Math.floor(chars?.length / 2)
    );

    gsap.fromTo(
      chars,
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        duration: 2,
        delay: "random(0, .5)",
        ease: "power4.out",
        // position: "<",
      }
    );
  }, []);

  return (
    <Box>
      <Skills />
      <TwoSidedLayout>
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          The power to do more
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          // fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          className="our-text"
        >
          A large headline about our product features & services
        </Typography>
        <Typography
          fontSize="lg"
          textColor="text.secondary"
          lineHeight="lg"
          className="our-text"
        >
          A descriptive secondary text placeholder. Use it to explain your
          business offer better.
        </Typography>
        <Button size="lg" endDecorator={">"}>
          Get Started
        </Button>
        <Typography>
          Already a member? <Link fontWeight="lg">Sign in</Link>
        </Typography>

        {/* <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        HeroLeft0112312
      </Typography> */}
      </TwoSidedLayout>
    </Box>
  );
}
