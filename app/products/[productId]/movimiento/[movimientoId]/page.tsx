export default function TransactionDetail({ params }:{
    params: {
        productId: string,
        movimientoId: string,
    };
}) {
    return (<h1> Movimiento { params.movimientoId } del producto { params.productId} </h1>);
}