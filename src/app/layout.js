import IntroText from "./components/intro-text";
import { Menu } from "./components/menu";
import { SubtitleText } from "./components/subtitletext";
import ThemeButton from "./components/themebutton";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>
        <header>
          <Menu />
        </header>
        <main>
          <IntroText/>
          <SubtitleText/>
          {children}
        </main>
        <footer>
          <ThemeButton/>
        </footer>
      </body>
    </html>
  );
}
