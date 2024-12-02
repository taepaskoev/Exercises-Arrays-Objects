/*Ejercicio 1
Planteamiento: Tenemos una lista de productos en un carrito de compras. Necesitamos calcular el total a pagar
considerando cantidad y precio de cada producto.(consultar cómo funciona el Reduce)

Paso a paso:
1. Crear array de objetos con productos (nombre, precio, cantidad)
2. Crear función para calcular total
3. Utilizar reduce() para sumar subtotales
4. Mostrar resultados
*/

//array de objetos, datos de los smartphones
const smartphones = [
    {nombre: "samsung", precio: 900, cantidad: 2},
    {nombre: "iphone", precio: 2900, cantidad: 4},
    {nombre: "xiaomy", precio: 800, cantidad: 8},
    {nombre: "motorola", precio: 600, cantidad: 3},
    {nombre: "red magic", precio: 1900, cantidad: 2},
];

//funcion para calcular el total
const calcularTotal = (celulares) =>{
    return celulares.reduce((total, celular) =>{
        const subtotal = celular.precio*celular.cantidad;
        return total + subtotal;
    },0);
};

//calcular y mostrar el resultado
const total = calcularTotal(smartphones);
console.log("Productos en el carrito: ",smartphones);
console.log("Total a pagar: $" + total);