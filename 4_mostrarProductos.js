const precios = require("./4_precios");
const productos = require("./4_productos");

const nuevoArray = [];

let log = console.log;

for (i = 0; i < 4; i++){
    
nuevoArray.push(`{${productos[i]}: ${precios[i]}}`);
}


log(nuevoArray);