const a = ["foo", "alfa", "ram"];
let nuevoArray = [];
let log = console.log;

let z;
for (i = 0; i < 3; i++){

z = a[i]; 
nuevoArray.push(z.charAt(0));

}
let b = nuevoArray.join([]);
log(b);
