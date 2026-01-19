import foto from "../assets/foto.jpeg";

function Sidebar({ darkMode, setDarkMode }) {
  return (
    <aside className="sidebar">
      <img src={foto} alt="Foto de Jorge Anjos" className="foto" />

      <h2 className="name">Jorge Anjos</h2>
      <p className="role">Desenvolvedor JR</p>

      <div className="info">
        <p>Salvador - Bahia</p>
        <p>jorgez.anjos@gmail.com</p>
        <p className="whatsapp">
          <a
            href="https://wa.me/5579991995233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="Falar comigo no WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>(79) 99199-5233</span>
          </a>
        </p>
      </div>

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/jorge-anjos-a252aa238/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>

        <a
          href="https://github.com/iorgeAnjos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="devicon-github-original"></i>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
