const nombres = [{nombre:"foo"},
                 {nombre:"bar"},
                 {nombre:"qux"},
                 {nombre:"ram"},               
];
let log = console.log;
let i = 0;


/* //iteracion ciclo for
for (i = 0; i < 4; i++){
   let z = nombres[i][`nombre`];
    log(`${i + 1} - nombre: ${z}`)
}

console.log (nombres[0][`nombre`]);
*/


/* //iteracion ciclo map
nombres.map(function(elementos,idx){
    log(`${idx + 1}  - nombre: ${elementos.nombre}`)
})
*/

/* //iteracion ciclo while
while(i < 4){
    log(`${i + 1} - nombre: ${nombres[i][`nombre`]}`)
    i++;

}
*/
