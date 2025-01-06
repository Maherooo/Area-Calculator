function ellips(){
    const bas0=getinputvalue('ellips1');
    const hei0=getinputvalue('ellips2');
    const area=3.1416*bas0*hei0;
    setinnervalu('ellips12',area)
 }
 function getinputvalue(inputvalue)
 {
    const infield=document.getElementById(inputvalue);
    const inputtext=infield.value;
    const inputvalue1=parseFloat(inputtext);
    return inputvalue1;
 }
 function setinnervalu(elementId,area)
 {
    const element=document.getElementById(elementId);
    element.innerText=area;
 }
 