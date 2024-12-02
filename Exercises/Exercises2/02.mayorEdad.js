/*Ejercicio 2
Planteamiento: Filtrar estudiantes aprobados (nota >= 7) 
de una lista de estudiantes y mostrar sus nombres.*/

//array de objetos
const mayorEdad = [
    {nombre: "Eider", edad: 25},
    {nombre: "Juan", edad: 17},
    {nombre: "Camila", edad: 32},
    {nombre: "Fernanda", edad: 2},
    {nombre: "Esteban", edad: 22},
    {nombre: "Felipe", edad: 12},
    {nombre: "Juliana", edad: 17},
];

//filtrar mayores
const mayores = mayorEdad.filter(mayor => mayor.edad >= 18).map(mayor => mayor.nombre);

console.log("Mayores de edad:", mayores);