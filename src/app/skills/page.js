import IntroText from "../components/intro-text";
import Image from "next/image";
import javascriptIcon from "../assets/javascript-icon.png"
import typescriptIcon from "../assets/typescript-icon.png"
import cssIcon from "../assets/css-icon.png"
import reactIcon from "../assets/react-icon.png"

export default function Skills() {
    return (
        <div>   
            <IntroText>
                My Skills
            </IntroText>
            <main>
            
            <div className="skills" >
                <div className="each-skill skill1">
                    <Image
                        src={cssIcon}
                        alt="skill1"
                        width={100}
                        height={100}
                        className="skills-img skill1-img"
                    />
                    <div className="skills-info skill1-info">
                        <h1>CSS</h1>
                        <p>intermediary-advanced</p>
                    </div>
                </div>
                <div className="each-skill skill2">
                    <Image
                        src={javascriptIcon}
                        alt="skill1"
                        width={100}
                        height={100}
                        className="skills-img skill2-img"
                    />
                    <div className="skills-info skill2-info">
                        <h1>Javascript</h1>
                        <p>intermediary</p>
                    </div>
                    
                </div>
                <div className="each-skill skill3">
                    <Image
                        src={reactIcon}
                        alt="skill1"
                        width={100}
                        height={90}
                        className="skills-img skill3-img"
                    />
                    <div className="skills-info skill3-info">
                        <h1>React</h1>
                        <p>beginner</p>
                    </div>
                    
                </div>
                <div className="each-skill skill4">
                    <Image
                        src={typescriptIcon}
                        alt="skill1"
                        width={100}
                        height={100}
                        className="skills-img skill4-img"
                    />
                    <div className="skills-info skill4-info">
                        <h1>Typescript</h1>
                        <p>beginner</p>
                    </div>
                    
                </div>
            </div>
        </main>
        </div>
        



    )
}