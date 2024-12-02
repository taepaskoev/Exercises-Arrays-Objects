const barberos = [
    { id: 1, nombre: 'Eider', especialidad: 'cortes masculinos' },
    { id: 2, nombre: 'Juan', especialidad: 'cortes femeninos'}
    ];
    
    let cuposBarberia = [];
    function agendarCupo(cliente, barberoId, fecha, hora) {
        const barbero = barberos.find(d => d.id === barberoId);
        if (!barbero) {
            return 'Barbero no encontrado';
        }
    
        if (cupoExiste(fecha, hora, barberoId)) {
            return 'Horario no disponible';
        }
    
        const nuevoCupo = {
            id: cuposBarberia.length + 1,
            cliente,
            barbero: barbero.nombre,
            fecha,
            hora
        };
    
        cuposBarberia.push(nuevoCupo);
        return `Cupo agendado para ${cliente} con ${barbero.nombre}`;
    }
    function cupoExiste(fecha, hora, barberoId) {
        return cuposBarberia.some(c => c.fecha === fecha && c.hora === hora && barberos.find(d => d.nombre === c.barbero)?.id === barberoId);
    }
    
    function verCupoCliente(cliente) {
        return cuposBarberia.filter(c => c.cliente === cliente);
    }
    
    function cancelarCupo(cupoId) {
        const index = cuposBarberia.findIndex(c => c.id === cupoId);
        if (index === -1) return 'Cupo no encontrado';
    
        cuposBarberia.splice(index, 1);
        return 'Cupo cancelado exitosamente';
    }
        
    // Ejemplo de uso
    console.log(agendarCupo('Pepito Perez', 1, '2024-11-28','09:00'));
    console.log(verCupoCliente('Pepito Perez'));
    console.log(cancelarCupo(1));