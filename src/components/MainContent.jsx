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
        <div className="skills">
          <i className="devicon-react-original colored" title="React"></i>
          <i
            className="devicon-javascript-plain colored"
            title="JavaScript"
          ></i>
          <i className="devicon-python-plain colored" title="Python"></i>
          <i className="devicon-flask-original" title="Flask"></i>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
