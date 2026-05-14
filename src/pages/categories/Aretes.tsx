import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Aretes = () => {
  const Aretes = products.filter(
    (p) => p.category === "Aretes"
  );

  return (
    <div className="min-h-screen bg-[#020b1c] text-white px-6 py-24">

      {/* VOLVER */}
      <button
        onClick={() => {
          window.location.href = "/#categorias";
        }}
        className="inline-block mb-12 text-sm uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors"
      >
        ← Volver a categorías
      </button>

      {/* TÍTULO */}
      <h1 className="text-5xl md:text-6xl font-serif mb-16">
        Aretes
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {Aretes.map((p) => (

          <a
            key={p.name}
            href={`https://wa.me/573108917952?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(p.name)}`}
            target="_blank"
            rel="noreferrer"
            className="group"
          >

            {/* IMAGEN */}
            <div className="overflow-hidden rounded-xl bg-[#091326]">

              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>

            {/* INFO */}
            <div className="mt-4">

              <h2 className="text-lg text-white group-hover:text-gray-300 transition-colors">
                {p.name}
              </h2>

              <p className="text-gray-400 mt-1">
                {p.price
                  ? `$${p.price.toLocaleString("es-CO")}`
                  : "Bajo pedido"}
              </p>

              {/* CTA */}
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-500 group-hover:text-white transition-colors">
                Pide Aqui
              </p>

            </div>

          </a>

        ))}

      </div>

    </div>
  );
};

export default Aretes;