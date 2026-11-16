import './RecetaCard.css';

export default function RecetaCard({ receta }) {
  return (
    <article className="receta-card">
      <img src={receta.imagen} alt={receta.titulo} className="receta-img" />
      <div className="receta-contenido">
        <span className="receta-categoria">{receta.categoria}</span>
        <h3 className="receta-titulo">{receta.titulo}</h3>
        <p className="receta-descripcion">{receta.descripcion}</p>
        <div className="receta-detalles">
          <span>⏱️ {receta.tiempo}</span>
          <span>📊 {receta.dificultad}</span>
        </div>
        <button className="receta-btn">Ver preparación</button>
      </div>
    </article>
  );
}