export async function getStaticPaths() {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }]; // Ejemplo de rutas
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = { id: params.id, name: `Producto ${params.id}` }; // Simulación de datos
  return { props: { data } };
}

export default function Product({ data }) {
  return (
    <div>
      <h1>Producto {data.id}</h1>
      <p>Nombre: {data.name}</p>
    </div>
  );
}
