"use client"
export default function PostCard({ product }: any) {
  return (
    <div>
      <p>{product.codigo}</p>
      <p>{product.producto}</p>
      <p>{product.precio}</p>
      <button onClick={() => alert(`El producto ${product.codigo} ha sido eliminado`)}>Click</button>
      </div>
  );
}

