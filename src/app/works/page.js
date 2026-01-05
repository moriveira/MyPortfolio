import IntroText from "../components/intro-text";
import { SubtitleText } from "../components/subtitletext";
import Image from "next/image";
import work1 from "../assets/work1.jpeg"
import work2 from "../assets/work2.jpeg"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.jpeg"

export default function Works() {
    return (
        <div className="works">
            <IntroText>
                My Projects
            </IntroText>
            <span className="subintro">
                <SubtitleText>
                    A collection of sites I've created
                </SubtitleText>
            </span>

            <main className="projects">
                <div className="projects-container">
                    <div className="project-item project1">
                        <a href="https://moriveira.github.io/PortfolioSimulado">

                            <p>
                                <h1 className="project-title">Porfólio Simulado</h1>
                                modelo de portfólio para um fotógrafo desenvolvido
                                para treinar estruturação de páginas,
                                organização visual e boas práticas de layout
                            </p>
                            <Image
                                src={work1}
                                alt="projeto1"
                                width={450}
                                height={250}
                                className="work work1"
                            />
                        </a>

                    </div>



                    <div className="project-item project2">
                        <a href="https://moriveira.github.io/loginbasico/">

                            <p>
                                <h1 className="project-title">Login Básico</h1>
                                modelo teste para uma página básico de Login
                            </p>
                            <Image
                                src={work2}
                                alt="projeto2"
                                width={450}
                                height={250}
                                className="work work2"
                            />
                        </a>
                    </div>
                    <div className="project-item project3">
                        <a href="https://automecanicamorikawa.com.br/">

                            <p>
                                <h1 className="project-title">Automecânica Morikawa</h1>
                                Site para uma Oficina Auto Elétrica Mecânica em Guarulhos, 
                                criado para agilizar a escolha de serviços
                            </p>
                            <Image
                                src={work3}
                                alt="projeto3"
                                width={450}
                                height={250}
                                className="work work3"
                            />
                        </a>
                    </div>
                    <div className="mini-project-item project4">
                        <a href="https://moriveira.github.io/Portfolio">

                            <p>
                                <h1 className="project-title">Antigo Portfólio</h1>
                                portfólio que fiz apenas usando HTML e CSS
                            </p>
                            <Image
                                src={work4}
                                alt="projeto3"
                                width={100}
                                height={100}
                                className="mini-work work4"
                            />
                        </a>
                    </div>
                    <div className="project-item project5">
                        <a href="https://moriveira.github.io/ProjetoMarvelTelaInicial">

                            <p>
                                <h1 className="project-title">Projeto Marvel</h1>
                                Projeto que fiz para passar em um processo seletivo
                            </p>
                            <Image
                                src={work5}
                                alt="projeto3"
                                width={450}
                                height={250}
                                className="work work5"
                            />
                        </a>
                    </div>

                </div>
            </main>
        </div>

    )
}