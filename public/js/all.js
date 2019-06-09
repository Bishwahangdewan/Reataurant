//responsive navbar
const toggler_a = document.querySelector('.icon');
let ul = document.querySelector('.topnav');
   
toggler_a.addEventListener('click',function(e){
  
   if(ul.className === "topnav"){

          ul.className = "responsive";

   }else{

          ul.className = "topnav";
  
   }
})