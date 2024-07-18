import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My first Next app",
  description: "Built by PJW",
};

export default function RootLayout({ children, team, analytics }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {team}
        {analytics}
      </body>
    </html>
  );
}


