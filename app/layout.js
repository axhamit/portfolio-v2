import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.intro,
  openGraph: { title: `${site.name} | ${site.role}`, description: site.intro, type: "website" },
};
export const viewport = { themeColor: "#2338e6" };

const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript><style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
