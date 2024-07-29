"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { usePathname } from "next/navigation";
import BgNavbar from "@/components/BgNavbar";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../../lib/UserConext";

// export const metadata = {
//   title: 'Robort Green: Your Ultimate Destination for Plant EnthusiastsGreen',
//   description: 'Robort Green: Where Plant Lovers Unite! Explore, Learn, and Connect with Nature\'s Beauty. Join us in nurturing your green passion.',
//   openGraph: {
//     type: 'website',
//     url: 'https://www.joyndigital.com/', // Add your website URL here
//     title: 'Robort Green: Where Plant Lovers Unite! Explore, Learn, and Connect with Nature\'s Beauty. Join us in nurturing your green passion.',
//     description: "",
//     images: [
//       {
//         url: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         width: 1200,
//         height: 630,
//         alt: 'Joyn Digital Open Graph Image'
//       }
//     ],
//     'theme-color': '#f2eeee',
//     "color-scheme": 'white Green only',
//   },
//   twitter: {
//     cardType: 'summary_large_image',
//     'twitter-image': 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
// };

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <UserProvider>
          {path === "/" ||
          path === "/for-Business" ||
          path === "/tree-planting" ||
          path === "/Register" ||
          path === "/login" ||
          path === "/Reset-password" ||
          path === "/Forget-password" ||
          path === "/about" ||
          path === "/flight" ||
          path === "/coffee" ||
          path === "/madagascar" ||
          path === "/mozambique" ||
          path === "/kenya" ||
          path === "/honduras" ||
          path === "/ethiopia" ||
          path === "/plant-tree" ||
          path === "/carbon-offsets" ? (
            <Navbar />
          ) : path === "/calculator" ? null : (
            <BgNavbar />
          )}
          <Toaster position="center-right" />

          {children}
          {path === "/calculator" ? null : <Footer />}
        </UserProvider>
      </body>
    </html>
  );
}
