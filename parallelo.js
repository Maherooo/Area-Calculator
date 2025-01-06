function value3(){
    const bas=document.getElementById('base1').value;
    const hei=document.getElementById('height1').value;
    const cal1=parseFloat(bas)*parseFloat(hei);
    const value1=document.getElementById('paralloval');
    value1.textContent=cal1;
 }