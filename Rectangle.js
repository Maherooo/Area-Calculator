function value2(){
    const wi=document.getElementById('width0').value;
    const idth=document.getElementById('Iidth0').value;
    const cal1=parseFloat(wi)*parseFloat(idth);
    const value1=document.getElementById('value0');
    value1.textContent=cal1;
 }