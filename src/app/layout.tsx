import type { Metadata } from "next";
import ThemeRegistry from "../theme-registry";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>{children}dddddd</ThemeRegistry>
        <div>kkkkkk</div>
        {/* <div id="root">{children}</div> */}
      </body>
    </html>
  );
}
