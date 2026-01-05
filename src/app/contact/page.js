import IntroText from "../components/intro-text";
import Image from "next/image";
import userFoto from "../assets/kenzo.jpeg"
import { HiX } from "react-icons/hi";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="contact">
            <IntroText>
                Contact
            </IntroText>
            <main>
                <div className="contact-box">
                    <div className="chatHeader">
                        <Image
                            src={userFoto}
                            alt="skill1"
                            width={67}
                            height={67}
                            className="botchat-img"
                        />
                        <p className="botName">
                            Kenzo's Bot
                        </p>
                        <div className="back-button">
                            <Link href="/"><HiX size={30}/></Link>
                            
                        </div>
                    </div>
                    <div className="chat">
                        <p className="message msg1">
                            Olá!
                        </p>
                        <p className="message msg1">
                            Eu sou o Bot do Kenzo, estou aqui para te ajudar no contato com ele.
                        </p>
                        <p className="message msg1">
                            Como posso te ajudar hoje?
                        </p>
                        <a href="https://moriveira.github.io/Portfolio/" className="options option1">
                            Quero olhar seu portfólio antigo
                        </a>
                        <a href="mailto:kenzomorik@gmail.com" className="options option2">
                            Apenas mandar uma mensagem
                        </a>
                        <a href="https://wa.me/5511976747676" className="options option3">
                            Interessado em conversar com você
                        </a>
                        <a href="https://www.instagram.com/morikawa.dev?igsh=MTI4eDF6NG1ucWY2eA==" className="options option4">
                            Explorar suas redes sociais
                        </a>
                    </div>

                </div>
            </main>
        </div>

    )
}