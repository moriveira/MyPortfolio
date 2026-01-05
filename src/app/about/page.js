import Image from "next/image";
import IntroText from "../components/intro-text";
import userFoto from "../assets/kenzo.jpeg"
import { SubtitleText } from "../components/subtitletext";

export default function About() {
    return (
        <div className="about">
            <nav>
                <IntroText>
                    About Me
                </IntroText>
            </nav>
            <main className="user">
                <Image
                    src={userFoto}
                    alt="foto user"
                    width={400}
                    height={400}
                    className="user-icon"
                />

                <div className="user-section">
                    <h2 className="user-text">
                        i am a Front-End Developer passionate about clean designs
                    </h2>
                    <SubtitleText>
                        Over the past few months,
                        I've been exploring areas of web development,
                        including HTML, CSS, JavaScript, React, and TypeScript,
                        always focusing on design, usability, and performance.

                        I enjoy putting my own ideas into practice and improving every detail.

                        Currently,
                        I'm dedicating myself to becoming a full-stack developer,
                        creating projects,
                        and preparing for job opportunities in the Front-End's area.
                    </SubtitleText>
                </div>

            </main>
        </div>


    )
}