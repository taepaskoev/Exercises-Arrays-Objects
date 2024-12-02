/*Ejercicio 3
Planteamiento: Agrupar productos por categoría y calcular el total de ventas por cada una.*/

const ventas = [
    {producto: "Manzanas", categoria: "Frutas", monto: 150},
    {producto: "Leche", categoria: "Lácteos", monto: 200},
    {producto: "Peras", categoria: "Frutas", monto: 100},
    {producto: "Queso", categoria: "Lácteos", monto: 300},
    {producto: "Yogurt", categoria: "Lácteos", monto: 180}
    ];
    const ventasPorCategoria = ventas.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
    }, {});
    console.log("Ventas por categoría:", ventasPorCategoria);