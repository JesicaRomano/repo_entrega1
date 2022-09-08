//Construyo a través de una class constructor un objeto vacio
class Cliente{
    constructor(nombre, apellido, edad, dni, caja, esCliente){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = Number(edad);
        this.dni = Number(dni);
        this.caja = Number(caja);
        this.esCliente = esCliente;
    }
}
//Creo un array vacio
const clientes = [];

//Agrego clientes a mi array
clientes.push(new Cliente("Ramon", "Sanchez", 35, 33256789, 100000, true));
clientes.push(new Cliente("Maria", "Cruz", 42, 28555111, 75000, true));
clientes.push(new Cliente("Ana", "Silva", 38, 30111999, 80000, true));
clientes.unshift(new Cliente("Juan", "Perez", 25, 39111222, 0, false));
clientes.push(new Cliente("Pedro", "Gomez", 62, 14789456, 50000, true));
clientes.push(new Cliente("Carlos", "Gonzalez", 51, 23123423, 0, false));

//Consulto elemento de mi array
console.log(clientes.length);

//Elimino a los no clientes de mi array
clientes.pop();
clientes.shift();

//Recorro mi array de objetos
for(const cliente of clientes){
    console.log(cliente);
}

//Creo un array vacio con las distintas alternativas de inversión
let listaInversion = [];

//Mediante prompt el usuario indica en que quiere invertir
const registrarInversion = () => {
    let tipoDeInversion = prompt('Ingrese \n 1. Plazo Fijo \n 2. Dolares \n 3. Bonos \n 4. Acciones')
    let importeInversion = Number(prompt('Ingrese importe que desea invertir'));
    
    let inversion ={
        tipo: tipoDeInversion,
        importe: importeInversion
    }
    
    if (inversion.tipo === 1){
        inversion.tipo = 'Plazo Fijo';
    }else if(inversion.tipo === 2){
        inversion.tipo = 'Dolares';
    }else if(inversion.tipo === 3){
        inversion.tipo = 'Bonos';
    }else if(inversion.tipo === 4){
        inversion.tipo === 'Acciones'
    }
    
    listaInversion.push(inversion);

    alert('Tipo de inversión ' +inversion.tipo+ ' importe ' +inversion.importe);
}
registrarInversion();

//El usuario decide si quiere realizar otra inversión
while (confirm ('¿Desea realizar otra inversión?')){ 
    registrarInversion();
}
console.table(listaInversion);

//Filtro en un nuevo array a los clientes que cuentan con mas de $75000 para invertir
const mayores = clientes.filter(cliente => cliente.caja > 75000)
console.log(mayores);

//Muestro los apellidos de mis clientes
const listaApellidos = clientes.map(cliente => cliente.apellido)
console.log(listaApellidos);

//Busco si existe alguien con más de $250000 en caja
const existe = clientes.some(cliente => cliente.caja === 250000)
console.log(existe);

//Busco cliente con 35 años de edad
const resultado = clientes.find(cliente => cliente.edad  === 35); 
console.log(resultado);

//Busco obtener el valor total de caja 
const total = clientes.reduce((acc, la) => acc + la.caja, 0)
console.log(total);

