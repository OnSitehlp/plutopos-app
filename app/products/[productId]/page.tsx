//Alt+96 backtick
async function LoadProduct(id: string) {
const res= await fetch(`http://localhost:3000/productos/${ id }`)
const data = await res.json();
return data;
}




export default async function PorductDetail({params}:{params: any}) {
    const product= await LoadProduct(params.productId) 
    return (<div>
        <h2>Detalle del Producto <span>{params.productId}</span></h2>
        <p>{product.codigo}</p>
        <p>{product.producto}</p>
        <p>{product.precio}</p>
        <p>{product.stock}</p>
        <p>{product.bodega.bodega}</p>

        </div>)
    

}