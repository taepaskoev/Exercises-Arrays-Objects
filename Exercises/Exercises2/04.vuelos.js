// Estado inicial de los vuelos
const vuelos = [
    { vuelo: 1, tipo: 'economico', precio: 200, ocupado:false },
    { vuelo: 2, tipo: 'ejecutivo', precio: 430, ocupado: false },
    { vuelo: 3, tipo: 'primera clase', precio: 590, ocupado: false }
    ];
    
    // Registro de boletos
    let boleto = [];
    
    // Función para comprar un boleto
    function compraBoleto(numeroVuelo, viajero, fechaCompra, fechaVuelo) {
        const vuelo = vuelos.find(v => v.vuelo === numeroVuelo);
    
        if (!vuelo) {
            return `El vuelo ${numeroVuelo} no existe`;
        }
    
        if (vuelo.ocupado) {
            return `El vuelo ${numeroVuelo} ya está ocupada`;
        }
    
        vuelo.ocupado = true;
    
        const nuevaCompra = {
            id: boleto.length + 1,
            vuelo: numeroVuelo,
            viajero,
            fechaCompra,
            fechaVuelo
        };
    
        boleto.push(nuevaCompra);
        return `Compra confirmada para ${viajero} en el vuelo
    ${numeroVuelo}`;
    }
    
    // Función para ver los vuelos disponibles
    function vuelosDisponibles() {
        return vuelos.filter(v => !v.ocupado);
    }
    
    // Función para cancelar el vuelo
    function cancelarVuelo(numeroVuelo) {
        const vuelo = vuelos.find(v => v.vuelo === numeroVuelo);
    
        if (!vuelo) {
            return `El vuelo ${numeroVuelo} no existe`;
        }
        
        if (!vuelo.ocupado) {
            return `El vuelo ${numeroVuelo} ya está libre`;
        }
        
        vuelo.ocupado = false;
        boleto = boleto.filter(b => b.vuelo !== numeroVuelo);
        return `Boleto de vuelo cancelado para el vuelo
    ${numeroVuelo}`;
    }
    
    // Ejemplo de uso
    console.log(vuelosDisponibles());
    console.log(compraBoleto(1, "Juan Pérez", "2024-11-", "2024-11-30"));
    console.log(vuelosDisponibles());
    console.log(cancelarVuelo(1));
    console.log(vuelosDisponibles());