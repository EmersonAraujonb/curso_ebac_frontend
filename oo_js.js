// Classe base
function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

// Classe Carro
function Carro(marca, modelo) {
    Veiculo.call(this, marca, modelo);

    this.acelerar = function () {
        console.log("O carro está acelerando.");
    };
}

// Classe Moto
function Moto(marca, modelo) {
    Veiculo.call(this, marca, modelo);

    this.acelerar = function () {
        console.log("A moto está acelerando.");
    };
}

// Instâncias
const carro1 = new Carro("Ford", "Mustang");
const carro2 = new Carro("Honda", "Civic");
const moto1 = new Moto("Yamaha", "Fazer 250");

console.log(carro1);
console.log(carro2);
console.log(moto1);

carro1.acelerar();
carro2.acelerar();
moto1.acelerar();