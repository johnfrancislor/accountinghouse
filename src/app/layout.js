import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Accounting House Inc. | Accountants in Dartmouth, Halifax & HRM",
  description:
    "A full service accounting office in Dartmouth, Nova Scotia offering personal and corporate income tax preparation, accounting and bookkeeping, payroll services and financial statement preparation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
