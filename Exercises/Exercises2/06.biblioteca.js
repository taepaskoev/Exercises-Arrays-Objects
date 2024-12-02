// Array de pbjetos para los libros
const libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', disponible: true },
    { id: 2, titulo: '1984', autor: 'George Orwell', disponible: true },
    { id: 3, titulo: 'El principe', autor: 'Nicolas Maquiavelo', disponible: true }
];

// Historial de transacciones
let transacciones = [];

// Función para consultar disponibilidad de un libro
function consultarDisponibilidad(libroId) {
    const libro = libros.find(l => l.id === libroId);
    return libro ? (libro.disponible ? 'Disponible' : 'No disponible') : 'Libro no encontrado';
}

// Función para prestar un libro
function prestarLibro(usuario, libroId) {
    const libro = libros.find(l => l.id === libroId);
    if (!libro) return 'Libro no encontrado';
    if (!libro.disponible) return 'Libro no disponible';
    
    libro.disponible = false;
    registrarTransaccion(usuario, 'préstamo', libroId);
    return `El libro "${libro.titulo}" ha sido prestado a ${usuario}.`;
}

// Función para devolver un libro
function devolverLibro(usuario, libroId) {
    const libro = libros.find(l => l.id === libroId);
    if (!libro) return 'Libro no encontrado';
    if (libro.disponible) return 'Este libro ya ha sido devuelto o no fue prestado';
    
    libro.disponible = true;
    registrarTransaccion(usuario, 'devolución', libroId);
    return `El libro "${libro.titulo}" ha sido devuelto por ${usuario}.`;
}

// Función para registrar las transacciones (préstamo y devolución)
function registrarTransaccion(usuario, tipo, libroId) {
    const libro = libros.find(l => l.id === libroId);
    transacciones.push({
        fecha: new Date().toISOString(),
        usuario,
        tipo,
        libroId,
        libro: libro.titulo
    });
}

// Pruebas
console.log(consultarDisponibilidad(1)); // Consulta disponibilidad de 'Cien años de soledad'
console.log(prestarLibro('Juan', 1)); // Juan pide prestado 'Cien años de soledad'
console.log(consultarDisponibilidad(1)); // Consulta disponibilidad de 'Cien años de soledad' nuevamente
console.log(devolverLibro('Juan', 1)); // Juan devuelve 'Cien años de soledad'
console.log(transacciones); // Muestra el historial de transacciones
