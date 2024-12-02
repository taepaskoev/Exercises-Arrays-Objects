const vuelos = [
    { id: 1, destino: "Nueva York", horarios: ["08:00", "12:00", "18:00"], precio: 250 },
    { id: 2, destino: "París", horarios: ["09:00", "15:00", "21:00"], precio: 300 }
];

let asientos = [
    { numero: "A1", ocupado: false },
    { numero: "A2", ocupado: false },
    { numero: "A3", ocupado: true },
    { numero: "B1", ocupado: false },
    { numero: "B2", ocupado: false }
];

let reservas = [];

// Ver vuelos disponibles
function verVuelos() {
    return vuelos.map(v => ({
        destino: v.destino,
        horarios: v.horarios
    }));
}

// Ver asientos disponibles
function verAsientosDisponibles() {
    return asientos.filter(a => !a.ocupado);
}

// Reservar un vuelo
function reservarVuelo(vueloId, horario, asientosSeleccionados) {
    const vuelo = vuelos.find(v => v.id === vueloId);
    if (!vuelo) return "Vuelo no encontrado";
    if (!vuelo.horarios.includes(horario)) {
        return "Horario no disponible";
    }

    const asientosValidos = asientosSeleccionados.every(asiento => {
        const asientoExiste = asientos.find(a =>
            a.numero === asiento && !a.ocupado);
        return asientoExiste;
    });

    if (!asientosValidos) return "Asientos no disponibles";
    const total = vuelo.precio * asientosSeleccionados.length;

    // Marcar asientos como ocupados
    asientosSeleccionados.forEach(asiento => {
        const idx = asientos.findIndex(a => a.numero === asiento);
        asientos[idx].ocupado = true;
    });

    const reserva = {
        id: reservas.length + 1,
        destino: vuelo.destino,
        horario,
        asientos: asientosSeleccionados,
        total
    };

    reservas.push(reserva);
    return reserva;
}

// Ejemplo de uso
console.log("Vuelos disponibles:", verVuelos());
console.log("Asientos disponibles:", verAsientosDisponibles());
console.log("Reservar vuelo:", reservarVuelo(1, "08:00", ["A1", "A2"]));
console.log("Asientos disponibles después de la reswerva:", verAsientosDisponibles());
