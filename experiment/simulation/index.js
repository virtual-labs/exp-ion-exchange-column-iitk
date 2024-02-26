// var f=0;
// var a= document.querySelector("#hard-water-sample")
// var dropfirst=document.querySelector("#drop1")
// var keep1=document.querySelector("#keep1st")
// var water=document.querySelector("#measurewater")
// var measur=document.querySelector("measuring-cylinder")
// var dropsecond=document.querySelector("#drop2")
// var keep2=document.querySelector("#keep2st")
// var conicalwater=document.querySelector("#conical-water")
// var buffersolution=document.queryselector("buffer-solution")
// function hardwatermove(){
//     if(f==0){
        
//         beakermove.style.transform= "translate(-284%,-175%) rotate(-60deg)"
//         keep1.style.visibility="visible";
//     setTimeout(function(){
//         dropfirst.style.visibility="visible";
//         water.style.visibility="visible";
        
//         setTimeout(function(){
//             dropfirst.style.visibility="hidden";
           
//         },300)

//     },2200)
//     setTimeout(function(){
//         console.log('Vishakha')
//         beakermove.style.transform= "translate(0%,0%) rotate(0deg)"
//     keep1.style.visibility="hidden";
   

// },3000)

//     f+=1;
//     }
 
// }
    

//     function measurmove(){
//       if(f==1){
//         measur.style.transform="translate(30%, -50%) rotate(60deg)"
//         water.style.transform="translate(-50%, -178%) rotate(60deg)"
//         keep2.style.visibility="visible";
//       }
//       water.style.visibility="hidden";
//       setTimeout(function(){
//         dropsecond.style.visibility="visible";
//         conicalwater.style.visibility="visible";
       
//         setTimeout(function(){
//             dropsecond.style.visibility="hidden";
         
           
//         },300)
//     },2200)
//     setTimeout(function(){
       
//       measur.style.transform= "translate(0%,0%) rotate(0deg)"
//       water.style.transform="translate(0%, 0%) rotate(0deg)"
//     keep2.style.visibility="hidden";
//     f+=1
   

// },3000)

// }

// function buffersolutionmove(){
//     if(f==2){
        
//         buffersolution.style.transform="translate(-240%,-175%) rotate(-60deg)"
//         water.style.transform="translate(-50%, -178%) rotate(60deg)"
//         keep1.style.visibility="visible";
//         setTimeout(function(){
//             dropfirst.style.visibility="visible";
//             water.style.visibility="visible";    
//             setTimeout(function(){
//                 dropfirst.style.visibility="visible";       
//             },300)
//         },2200)
//         setTimeout(function(){   
//             beakermove.style.transform= "translate(0%,0%) rotate(0deg)"
//             keep1.style.visibility="visible";
//         },3000)
//             f+=1;
//     }
// }
var water=document.querySelector("#mesurwater")
var a=document.querySelector("#hard-water-sample")
var cylendermesyr=document.querySelector("#measuring-cylinder")
var watermesur=document.querySelector("#mesurwater")
var b =document.querySelector("#measuring-cylinder")
var f=1;
function move(){
  if(f==1){
  a.style.transform="translate(0%,-110%)"

  setTimeout(function(){
   a.style.transform="translate(-270%,-110%) "
  },1000)

  setTimeout(function(){
    a.style.transform="translate(-270%,-100%) rotate(-45deg)"
   water.style.visibility="visible";
   },3000)

  setTimeout(function(){
    a.style.transform="translate(0%,0%) rotate(0deg) rotate(0deg)"
    f++;},5000)
  
  }
    }
  function mesurmove(){
    if (f==2){
    cylendermesyr.style.transform="translate(50%,-40%) rotate(45deg)"
    watermesur.style.transform="translate(60%,-145%) rotate(45deg)"
    setTimeout(function(){
      cylendermesyr.style.transform="translate(0%,0%) rotate(0deg)"
      watermesur.style.transform="translate(0%,0%) rotate(0deg)"
      
    },1500)

    }
    function meas(){
      b.style.transform ="translate(0%,-50%)"
      setTimeout(function(){
        b.style.transform="translate(30%,-50%)"
      },1000)
      setTimeout(function(){
        b.style.transform="translate(230%,-100) rotate(-45deg)"
      },3000)
      setTimeout(function(){
        b.style.transform="translate(0%,0%)rotate(0deg) rotate(0deg) rotate(0deg)"
      },5000)
    }

  }




    


    


   

