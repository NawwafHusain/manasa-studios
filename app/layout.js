//192.168.0.135
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import { Toaster } from "react-hot-toast";
import Mousefollow from "./components/MouseFollow";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Manasa Studios",
  description: "Bringing you brands to life through design and code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*The fixed height here is to allow for the Nav to be sticky */}
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/images/LogoBlack.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="name" content="manasa studios" />
      </head>
      <body
        className={`${josefin_Sans.className} relative h-max grid grid-cols-1 justify-items-center w-screen overflow-x-clip`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            className: "",
            style: {
              border: "1px solid black",
              padding: "16px",
              color: "black",
            },
          }}
        />

        <container className="overflow-x-clip relative xl:w-screen max-w-[1920px] w-max xl:h-[800vh] h-[1100vh] min-w-[360px] flex flex-col items-center">
          <Nav />
          {children}
          <Mousefollow />
        </container>
      </body>
    </html>
  );
}
