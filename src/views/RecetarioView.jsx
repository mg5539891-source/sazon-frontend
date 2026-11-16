import { useState } from 'react';
import Navbar from '../components/Navbar';
import RecetaCard from '../components/RecetaCard';
import Footer from '../components/Footer';
import { recetasIniciales } from '../data/recetasData';
import './RecetarioView.css';

export default function RecetarioView() {
  const [recetas] = useState(recetasIniciales);
  const [filtro, setFiltro] = useState('Todas');

  const categorias = ['Todas', 'Zenú', 'Doria', 'Noel', 'Jet', 'Pietrán'];

  const recetasFiltradas =
    filtro === 'Todas'
      ? recetas
      : recetas.filter((receta) => receta.categoria === filtro);

  return (
    <div className="layout-principal">
      <Navbar />

      <main className="contenedor-recetario">
        <section className="encabezado-recetario">
          <h2>Explora Nuestro Recetario</h2>
          <p>Descubre platos auténticos preparados paso a paso.</p>

          <div className="filtros-categorias">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`btn-filtro ${filtro === cat ? 'activo' : ''}`}
                onClick={() => setFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid-recetas">
          {recetasFiltradas.map((receta) => (
            <RecetaCard key={receta.id} receta={receta} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}