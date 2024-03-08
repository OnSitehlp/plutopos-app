"use client";
export default function TableProducts({ product }:any) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.codigo}</td>
      <td>{product.producto}</td>
      <td>{product.costo}</td>
      <td>{product.precio}</td>
      <td>{product.stock}</td>
      <td>{product.bodega.bodega}</td>
      <td>{product.marca.marca}</td>
      <td>{product.categoris.categoria}</td>
      <td>{product.unidadMedida.unidadMedida}</td>
      <td>
        <button
          onClick={() =>
            alert(`El producto ${product.codigo} ha sido eliminado`)
          }
        >
          Click
        </button>
      </td>
    </tr>
  );
}
