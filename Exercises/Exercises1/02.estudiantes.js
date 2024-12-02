/*Ejercicio 2
Planteamiento: Filtrar estudiantes aprobados (nota >= 7) de una lista de estudiantes y mostrar sus nombres. */

// Lista de estudiantes
const estudiantes = [
    {nombre: "Ana", nota: 8.5},
    {nombre: "Juan", nota: 6.5},
    {nombre: "María", nota: 9.0},
    {nombre: "Pedro", nota: 5.8},
    {nombre: "Luis", nota: 7.2}
    ];
// Filtrar aprobados
const aprobados = estudiantes    
.filter(estudiante => estudiante.nota >= 7)
.map(estudiante => estudiante.nombre);
console.log("Estudiantes aprobados:", aprobados);