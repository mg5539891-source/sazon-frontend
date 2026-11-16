import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div>
          <p><strong>Copyright © 2026 Grupo Nutresa</strong></p>
          <p className="footer-sub">Sazón Recetario Digital • Célula 2 Frontend SPA</p>
        </div>
        <div className="footer-marcas">
          <span className="marca-tag zenu">ZENÚ</span>
          <span className="marca-tag doria">DORIA</span>
          <span className="marca-tag noel">NOEL</span>
          <span className="marca-tag jet">JET</span>
          <span className="marca-tag pietran">PIETRÁN</span>
        </div>
      </div>
    </footer>
  );
}