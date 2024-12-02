/*Ejercicio 4
Planteamiento: Crear un sistema simple para gestionar reservas de habitaciones de hotel donde podamos:
• Agregar reservas
• Ver habitaciones disponibles
• Cancelar reservas
Paso a paso:
1. Crear array de habitaciones con estados
2. Implementar función para reservar
3. Implementar función para ver disponibilidad
4. Implementar función para cancelar */

// Estado inicial del hotel
const habitaciones = [
{ numero: 101, tipo: 'individual', precio: 100, ocupada:false },
{ numero: 102, tipo: 'doble', precio: 150, ocupada: false },
{ numero: 103, tipo: 'suite', precio: 250, ocupada: false }
];

// Registro de reservas
let reservas = [];

// Función para hacer una reserva
function reservarHabitacion(numeroHabitacion, huesped, fechaIngreso, fechaSalida) {
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);

    if (!habitacion) {
        return `La habitación ${numeroHabitacion} no existe`;
    }

    if (habitacion.ocupada) {
        return `La habitación ${numeroHabitacion} ya está ocupada`;
    }

    habitacion.ocupada = true;

    const nuevaReserva = {
        id: reservas.length + 1,
        habitacion: numeroHabitacion,
        huesped,
        fechaIngreso,
        fechaSalida
    };

    reservas.push(nuevaReserva);
    return `Reserva confirmada para ${huesped} en habitación
${numeroHabitacion}`;
}

// Función para ver habitaciones disponibles
function verDisponibles() {
    return habitaciones.filter(h => !h.ocupada);
}

// Función para cancelar reserva
function cancelarReserva(numeroHabitacion) {
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);

    if (!habitacion) {
        return `La habitación ${numeroHabitacion} no existe`;
    }
    
    if (!habitacion.ocupada) {
        return `La habitación ${numeroHabitacion} ya está libre`;
    }
    
    habitacion.ocupada = false;
    reservas = reservas.filter(r => r.habitacion !== numeroHabitacion);
    return `Reserva cancelada para la habitación
${numeroHabitacion}`;
}

// Ejemplo de uso
console.log(verDisponibles());
console.log(reservarHabitacion(101, "Juan Pérez", "2024-11-", "2024-11-30"));
console.log(verDisponibles());
console.log(cancelarReserva(101));
console.log(verDisponibles());