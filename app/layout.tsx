import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lines">
          <div className="line-1">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
          <div className="line-2">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
          <div className="line-3">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
          <div className="line-4">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
