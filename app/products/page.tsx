//https://www.youtube.com/watch?v=cuzw4vL1z5E
import TableProducts from "../components/TableProducts";

async function LoadProducts() {
    const res = await fetch("http://localhost:3000/productos");
    const data = await res.json();
    //await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
}
//https://www.youtube.com/watch?v=_SPoSMmN3ZU
// 1:06:22
async function ProductList() {
    const products = await LoadProducts();    
    return (
    <div>
         <h1>Productos</h1>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Product Name</th>
                    <th>Cost</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Bodega</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                    <th>Unidad Medida</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                {products.map((product: any)=> (
                    <TableProducts key={product.id} product={product} />
                ))}
        </tbody>
        </table>
    </div>
    );
}

export default ProductList;
