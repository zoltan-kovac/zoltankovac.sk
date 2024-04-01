// import * as React from "react";
// import { createNoise2D, NoiseFunction2D, createNoise3D } from "simplex-noise";
// import { Canvas, useCanvas } from "ui";

// const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
// const HALF_PI = 0.5 * PI;
// const TAU = 2 * PI;
// const TO_RAD = PI / 180;
// const floor = (n: number) => n | 0;
// const rand = (n: number) => n * random();
// const randIn = (min: number, max: number) => rand(max - min) + min;
// const randRange = (n: number) => n - rand(2 * n);
// const fadeIn = (t: number, m: number) => t / m;
// const fadeOut = (t: number, m: number) => (m - t) / m;
// const fadeInOut = (t: number, m: number) => {
//   let hm = 0.5 * m;
//   return abs(((t + hm) % m) - hm) / hm;
// };
// const dist = (x1: number, y1: number, x2: number, y2: number) =>
//   sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
// const angle = (x1: number, y1: number, x2: number, y2: number) =>
//   atan2(y2 - y1, x2 - x1);
// const lerp = (n1: number, n2: number, speed: number) =>
//   (1 - speed) * n1 + speed * n2;

// type BackgroundProps = {};

// const Background: React.FC<BackgroundProps> = (): JSX.Element => {
//   const [canvasA] = useCanvas();
//   const [canvasB] = useCanvas();

//   const circleCount = 150;
//   const circlePropCount = 8;
//   const circlePropsLength = circleCount * circlePropCount;
//   const baseSpeed = 0.1;
//   const rangeSpeed = 1;
//   const baseTTL = 150;
//   const rangeTTL = 200;
//   const baseRadius = 100;
//   const rangeRadius = 200;
//   const rangeHue = 60;
//   const xOff = 0.0015;
//   const yOff = 0.0015;
//   const zOff = 0.0015;
//   const backgroundColor = "hsla(0,0%,5%,1)";

//   let container;
//   let ctx;
//   let circles;
//   let circleProps = new Float32Array(circlePropsLength);
//   let simplex: NoiseFunction2D;
//   let baseHue: number;

//   console.log("circleProps", circleProps);
//   function initCircles() {
//     simplex = createNoise2D();
//     baseHue = 220;

//     let i;

//     for (i = 0; i < circlePropsLength; i += circlePropCount) {
//       initCircle(i);
//     }
//   }

//   function initCircle(i: number) {
//     let x: number, y: number, n, t, speed, vx, vy, life, ttl, radius, hue;

//     x = rand(canvasA.current.width);
//     y = rand(canvasA.current.height);
//     const noise3D = createNoise3D();
//     n = noise3D(x * xOff, y * yOff, baseHue * zOff);
//     t = rand(TAU);
//     speed = baseSpeed + rand(rangeSpeed);
//     vx = speed * cos(t);
//     vy = speed * sin(t);
//     life = 0;
//     ttl = baseTTL + rand(rangeTTL);
//     radius = baseRadius + rand(rangeRadius);
//     hue = baseHue + n * rangeHue;

//     circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
//   }

//   React.useEffect(() => {
//     initCircles();
//   }, [initCircles]);

//   return (
//     <>
//       <Canvas
//         currentRef={canvasA}
//         draw={(ctx: CanvasRenderingContext2D, frameCount: number) => {
//           let i2 = 1 + frameCount,
//             i3 = 2 + frameCount,
//             i4 = 3 + frameCount,
//             i5 = 4 + frameCount,
//             i6 = 5 + frameCount,
//             i7 = 6 + frameCount,
//             i8 = 7 + frameCount;

//           ctx.drawImage(canvasB?.current, 0, 0);

//           ctx.clearRect(0, 0, canvasA?.current.width, canvasA?.current.height);

//           const x = circleProps[frameCount];
//           const y = circleProps[i2];
//           const vx = circleProps[i3];
//           const vy = circleProps[i4];
//           const life = circleProps[i5];
//           const ttl = circleProps[i6];
//           const radius = circleProps[i7];
//           const hue = circleProps[i8];

//           ctx.save();
//           ctx.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
//           ctx.beginPath();
//           ctx.arc(x, y, radius, 0, TAU);
//           ctx.fill();
//           ctx.closePath();
//           ctx.restore();

//           initCircle(frameCount);

//           // updateCircles(frameCount);
//           // render();
//           // window.requestAnimationFrame(draw);

//           // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//           // ctx.fillStyle = "#ffffff";
//           // ctx.beginPath();
//           // ctx.arc(
//           //   150,
//           //   300,
//           //   20 * Math.sin(frameCount * 0.15) ** 2,
//           //   0,
//           //   2 * Math.PI
//           // );
//           // ctx.fill();
//         }}
//       />
//       <Canvas
//         currentRef={canvasB}
//         draw={(ctx: CanvasRenderingContext2D, frameCount: number) => {
//           ctx.drawImage(canvasA?.current, 0, 0);
//           ctx.fillStyle = backgroundColor;
//           ctx.fillRect(0, 0, canvasB?.current.width, canvasB?.current.height);

//           initCircle(frameCount);

//           ctx.save();
//           ctx.filter = "blur(100px)";
//           ctx.drawImage(canvasA.current, 0, 0);
//           ctx.restore();
//         }}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//         }}
//       />
//     </>
//   );
// };

// export default Background;
