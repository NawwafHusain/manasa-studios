//192.168.0.135
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Sans.className} relative lg:h-[700vh] h-[900vh] overflow-x-clip`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
