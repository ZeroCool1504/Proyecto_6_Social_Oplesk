const c = [{pies:"pies"}, [["cabeza"]], function(){return "cuerpo" }];

let log = console.log;

for (i = 0; i < c.length; i++){
  //log (c[i]);
  switch (i){
    case 0:
      log (c[i].pies);
      break;
    case 1:
      log (c[1][0][0]);
      break;
    case 2:
      log (c[2]());
      break;
  } 
  }