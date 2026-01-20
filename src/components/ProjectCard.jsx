import { useState } from "react";

function ProjectCard({ title, images, deployLink }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
    <>
      <div className="project-card">
        <h3>{title}</h3>

        <div className="carousel">
          <button onClick={prevImage} className="carousel-btn">
            ◀
          </button>

          <img
            src={images[index]}
            alt={`Imagem do projeto ${title}`}
            className="carousel-img"
            onClick={() => setIsOpen(true)}
          />

          <button onClick={nextImage} className="carousel-btn">
            ▶
          </button>
        </div>

        <a
          href={deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="deploy-link"
        >
          Ver projeto online
        </a>
      </div>

      {/* Modal com carrossel */}
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div
            className="modal-carousel"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={prevImage} className="carousel-btn">
              ◀
            </button>

            <img
              src={images[index]}
              alt="Imagem ampliada"
              className="modal-img"
            />

            <button onClick={nextImage} className="carousel-btn">
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
