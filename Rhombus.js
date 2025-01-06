 function rombus()
 {
    const romid=getromid('rhombusd1');
    const hei0=getromid('rhombusd2');
    const area=romid*hei0;
    valuesection('rhombos',area);
 }
 
 function getromid(inputt){
    const inputval=document.getElementById(inputt);
    const txtval=inputval.value;
    const inputvalu=parseFloat(txtval);
    return inputvalu;
 }
 function valuesection(clas,cal)
 {
    const baluese=document.getElementById(clas);
    baluese.textContent=cal;
 }