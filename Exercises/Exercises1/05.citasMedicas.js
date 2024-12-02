/*Ejercicio 5
Planteamiento del sistema de citas médicas:
Problema: Crear un sistema para gestionar citas médicas en una clínica que permita:
• Agendar citas verificando disponibilidad
• Ver historial de citas por paciente
• Cancelar citas existentes

Componentes necesarios:
1. Array de doctores con sus datos básicos
2. Array para almacenar las citas
3. Funciones principales:
o agendarCita(): Verifica disponibilidad y crea nueva cita
o citaExiste(): Valida horarios duplicados
o verCitasPaciente(): Muestra citas de un paciente
o cancelarCita(): Elimina una cita existente*/

const doctores = [
{ id: 1, nombre: 'Dra. García', especialidad: 'Medicina General' },
{ id: 2, nombre: 'Dr. Rodríguez', especialidad: 'Pediatría'}
];

let citas = [];
function agendarCita(paciente, doctorId, fecha, hora) {
    const doctor = doctores.find(d => d.id === doctorId);
    if (!doctor) {
        return 'Doctor no encontrado';
    }

    if (citaExiste(fecha, hora, doctorId)) {
        return 'Horario no disponible';
    }

    const nuevaCita = {
        id: citas.length + 1,
        paciente,
        doctor: doctor.nombre,
        fecha,
        hora
    };

    citas.push(nuevaCita);
    return `Cita agendada para ${paciente} con ${doctor.nombre}`;
}
function citaExiste(fecha, hora, doctorId) {
    return citas.some(c => c.fecha === fecha && c.hora === hora && doctores.find(d => d.nombre === c.doctor)?.id === doctorId);
}

function verCitasPaciente(paciente) {
    return citas.filter(c => c.paciente === paciente);
}

function cancelarCita(citaId) {
    const index = citas.findIndex(c => c.id === citaId);
    if (index === -1) return 'Cita no encontrada';

    citas.splice(index, 1);
    return 'Cita cancelada exitosamente';
}
    
// Ejemplo de uso
console.log(agendarCita('Ana López', 1, '2024-11-28','09:00'));
console.log(verCitasPaciente('Ana López'));
console.log(cancelarCita(1));