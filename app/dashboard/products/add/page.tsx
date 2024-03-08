import style from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'
export default function AddProductPage(){
    return(
        <div className={style.container}>
            <form action="" className={style.form}>
                
                <select name="bodegaId" id="bodegaId" required>
                    <option value="">Selecciona una bodega</option>
                    <option value="1">Sala Ventas</option>
                    <option value="2">Bodega Principal</option>                    
                </select>
               
                <select name ="categoriaId" is="categoriaId" required>
                    <option value="">Selecciona una categoria</option>
                    <option value="1">Abarrotes</option>
                    <option value="2">Lácteos</option>
                    <option value="3">Botillería</option>
                    <option value="4">Panadería</option>
                    <option value="5">Bebidas</option>
                    <option value="6">Carnes</option>
                    <option value="7">Cervezas</option>
                    <option value="8">Comida</option>
                </select>
               
                <select name="marcaId" id="marcaId">
                    <option value="">Selecciona una marca</option>
                    <option value="1">Luchetti</option>
                    <option value="2">Tucapel</option>
                    <option value="3">CCU</option>
                    <option value="4">Coca Cola</option>
                    <option value="5">Nestle</option>
                    <option value="6">Supremo</option>
                    <option value="7">PF</option>
                    <option value="8">Genérico</option>
                </select>
               
                <input type="text" placeholder='tipo código' name="tpoCodigo" id="tpoCodigo" value={'INT'} required/>
                
                <input type="text" placeholder='codigo' name="codigo" required/>
                
                <input type="text" placeholder="producto" name="producto" id="producto" required/>
                
                <select name="exento" id="exento">
                    <option value="">Afecto/Exento</option>
                    <option value="0" selected>Afecto</option>
                    <option value="1">Exento</option>                    
                </select>
                
                <input type="number" placeholder="costo" name="costo" id="costo" required/>
                
                <input type="number" placeholder="precio" name="precio" id="precio" required/>
                
                <input type="number" placeholder="stock" name="stock" id="stock" required/>
                
                <select name="unidadMedidaId" id="unidadMedidaId">
                    <option value="">Unidad Medida</option>
                    <option value="1" selected>CU</option>
                    <option value="2">Kg</option>
                    <option value="3">Lt</option>                    
                </select>
<button type="submit">Guardar</button>
                
            </form>
        </div>
    )
}