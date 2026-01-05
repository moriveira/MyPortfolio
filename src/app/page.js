import IntroText from "./components/intro-text";
import { SubtitleText } from "./components/subtitletext";

export default function Home() {
  return (
    <div className="intro-text">
        <IntroText>
          Sup, i'm Kenzo <span>A Front-End Developer</span>
        </IntroText>
        <SubtitleText>
          i'm passionate about websites to create a clean design and always thinking to user's experience
        </SubtitleText>
    </div>
  );
}