import ProjectCard from "./ProjectCard";

import yugiOh1 from "../assets/yugioh1.jpeg";
import yugiOh2 from "../assets/yugioh2.jpeg";
import yugiOh3 from "../assets/yugioh3.jpeg";

function MainContent() {
  return (
    <main className="main">
      <section>
        <h2>Sobre mim</h2>
        <p>
          Sou desenvolvedor, apaixonado por tecnologia e por soluções diversas
          para resolução de problemas
        </p>
      </section>

      <section>
        <h2>Experiência</h2>
        <p>
          Zopone Engenharia - Instalador e reparador de equipamentos de
          telecomunicações (2022 - 2025)
        </p>
      </section>

      <section>
        <h2>Formação</h2>
        <p>Análise e Desenvolvimento de Sistemas / Descomplica</p>
        <p>Curso JavaScript FullStack / BlueEdtech</p>
        <p>Curso completo Python / Udemy</p>
        <p>Curso de inglês Mario Vergara 5.0 / Inglês Mario Vergara</p>
      </section>

      <section>
        <h2>Habilidades</h2>
        <div className="skills">
          <i className="devicon-react-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-flask-original"></i>
        </div>
      </section>

      <section>
        <h2>Projetos</h2>

        <ProjectCard
          title="Catálogo Yu-Gi-Oh"
          images={[yugiOh1, yugiOh2, yugiOh3]}
          deployLink="https://catalogo-yugioh-iorgeanjos.onrender.com/"
        />
      </section>
    </main>
  );
}

export default MainContent;
