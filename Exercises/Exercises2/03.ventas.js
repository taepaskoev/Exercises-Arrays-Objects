/*Ejercicio 3
Planteamiento: Agrupar productos por categoría y calcular el total de ventas por cada una.*/

const ventas = [
    {producto: "Iphone 15", categoria: "tecnologia", monto: 200},
    {producto: "Pescado", categoria: "carnes", monto: 150},
    {producto: "tomate", categoria: "verduras", monto: 500},
    {producto: "luces direccionales", categoria: "repuestos", monto: 250},
    {producto: "cebolla", categoria: "verduras", monto: 100},
    {producto: "lavadora", categoria: "electrodomesticos", monto: 10},
    {producto: "tenis nike", categoria: "calzado", monto: 800},
];

const ventasPorCategoria = ventas.reduce((acc, venta) =>{
    acc[venta.categoria] = (acc[venta.categoria] || 0) +venta.monto
})