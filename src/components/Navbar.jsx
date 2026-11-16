import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-badge">🍲</span>
        <div>
          <h1>SAZÓN <span className="logo-nutresa">NUTRESA</span></h1>
          <p className="logo-sub">Célula 2: Recetario & FotoReceta</p>
        </div>
      </div>
      <nav className="navbar-links">
        <a href="#galeria" className="activo">Galería FotoRecetas</a>
        <a href="#admin">Panel Admin</a>
        <a href="#cocina">Modo Cocina</a>
      </nav>
    </header>
  );
}