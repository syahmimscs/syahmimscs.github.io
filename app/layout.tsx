import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import BodyClientWrapper from "./BodyClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syahmim Personal Portfolio",
  description:
    "Syahmim is a software engineer based in Singapore. He is currently a penultimate student in Singapore Management University majoring Software Engineering with a second major in Artificial Intelligence (AI).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-200 text-slate-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BodyClientWrapper>
          <div className="bg-[#c2e0ed] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#fbc9c2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </BodyClientWrapper>
      </body>
    </html>
  );
}
