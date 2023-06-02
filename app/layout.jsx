import "./globals.css";
import { Kanit } from "next/font/google";
import Header from "./components/Header";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sophie's Github",
  description: "github repos front-end web dev developer services",
  author: "Sophie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
