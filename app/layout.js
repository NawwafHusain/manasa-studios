//192.168.0.135
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav2 from "./components/nav2";
import { Toaster } from "react-hot-toast";
import Mousefollow from "./components/MouseFollow";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Manasa Studios",
  description:
    "Bringing you brands to life through design and code. Manasa Studios is a digital agency that specializes in web design and development.",
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
        <meta name="name" content="Manasa Studios" />
      </head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JT81QYG4V2"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-JT81QYG4V2');
      </Script>
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

        <container className="overflow-x-clip relative xl:w-screen max-w-[1920px] w-max   min-w-[360px] md:w-screen flex flex-col items-center">
          <Nav2 />
          {children}

          <Footer />
        </container>
        <Mousefollow />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
