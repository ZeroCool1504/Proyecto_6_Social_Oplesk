const menu = ["burguer", "papas", "gaseosa", "helado"];

let log = console.log;

let z = menu.push("agua");

function barra(){
    log(`${"-".repeat(14)}`);
    log("MENU-MENU-MENU")
    log(`${"-".repeat(14)}`)
 }

barra ();

menu.map(function(elementos,idx){
    log(`${idx + 1}) ${elementos}`)
    log(`${"-".repeat(14)}`)
})

