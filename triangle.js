function value1(){
   const traibase=document.getElementById('base');
   const traibasetext=traibase.value;
   const bas=parseFloat(traibasetext);
   console.log(bas);
   const height=document.getElementById('height');
   const heighttext=height.value;
   const cal=parseFloat(0.5*bas*heighttext);
   const triangle=document.getElementById('trivalue');
   triangle.textContent=cal;
}
