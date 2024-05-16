var f=9;
var funnelOverBurette=document.querySelector("#funnelOverBurette")
var EDTAbeaker=document.querySelector("#edta-beaker")
var WaterOverBurettedrops=document.querySelector("#waterOverBurette")
var filleBburet=document.querySelector("#filledburette")
var redvineFlask=document.querySelector("#redvineflask")
var buretteEDTAsolDROPS=document.querySelector("#buretteEDTAsolDROPS")
var buretStand=document.querySelector("#buretStand")
var emptyburette=document.querySelector("#emptyburette")
var exitbutton =document.getElementById("next-button")
//  exitbutton.textContent = "Exit";

 var textOFinstructions=document.getElementById("message-text")

 // **********************************************************************************end of variables*****************************************************************************
 var f=9;
 var e=22;
 var h=100;
 
 if(e==22){
                                                     
                                                     
     textOFinstructions.textContent = "Now click on EDTA BEAKER";
     e+=1;
 }
 if(h==22){
     textOFinstructions.textContent = "अब EDTA BEAKER पर क्लिक करें";
     h+=1;
 }
 





function buffersolmov(){

    if(e==23){
                                                     
                                                     
        textOFinstructions.textContent = "50ml of EDTA is poured inside the Burette";
        e+=1;
    }
    if(h==23){
        textOFinstructions.textContent = "ब्यूरेट के अंदर 50 मिलीलीटर ईडीटीए डाला जाता है";
        h+=1;
    }
    


    if(f==9)
    {
        EDTAbeaker.style.transform="translate(-55%,-250%)"
        setTimeout(function(){
            EDTAbeaker.style.transform="translate(-75%,-280%) rotate(-50deg)"
            funnelOverBurette.style.opacity="100"
            setTimeout(() => {
                
                WaterOverBurettedrops.style.opacity="100"
                setTimeout(() => {
                    filleBburet.style.opacity="100"
                    WaterOverBurettedrops.style.opacity="0"
                    setTimeout(() => {
                        funnelOverBurette.style.opacity="0"
                        EDTAbeaker.style.transform="translate(0%,0%) rotate(0deg)"

                        if(e==24){
                                                     
                                                     
                            textOFinstructions.textContent = "Now click on the Red Vine colored conical flask";
                            e+=1;
                        }
                        if(h==24){
                            textOFinstructions.textContent = "अब लाल बेल रंग के शंक्वाकार फ्लास्क पर क्लिक करें";
                            h+=1;
                        }
                        


                    }, 1400);
                    
                }, 1400);
            }, 1400);
        },2400)
       
       
        f+=1;
    }
}

function redvineconicalMOV(){

    
    
    if(f==10){
        redvineFlask.style.transform="translate(-488%,-13%)"
        if(e==25){
                                                         
                                                         
            textOFinstructions.textContent = "Now click on the burette";
            e+=1;
        }
        if(h==25){
            textOFinstructions.textContent = "अब ब्यूरेट पर क्लिक करें";
            h+=1;
        }
        // EDTAbeaker.style.transform="translate(-55%,-250%)"
        // WaterOverBurettedrops.style.opacity="100"
        
        f+=1;
    }
}

function buretteTAProtate(){

    if(e==26){
                                                         
                                                         
        textOFinstructions.textContent = "You will observe that the titration is under process and the color of the conical flask turns blue from red";
        e+=1;
    }
    if(h==26){
        textOFinstructions.textContent = "आप देखेंगे कि अनुमापन प्रक्रिया में है और शंक्वाकार फ्लास्क का रंग लाल से नीला हो जाता है";
        h+=1;
    }

    if(f==11){
        setTimeout(() => {
            
            buretteEDTAsolDROPS.style.opacity="100"
            setTimeout(() => {
                buretteEDTAsolDROPS.style.opacity="0"
                setTimeout(() => {
                    
                    
                    redvineFlask.src="assets/blue volumetric-flask.png"
                    setTimeout(() => {
                        EDTAbeaker.style.opacity="0"
                        filleBburet.style.opacity="0"
                        buretStand.style.opacity="0"
                        emptyburette.style.opacity="0"
                        setTimeout(() => {
                            redvineFlask.style.transform="translate(0%,0%)"
                            if(e==27){
                                                         
                                                         
                                textOFinstructions.textContent = "You will now observe that the both the conical flask are turned to blue color which proves that the water does not contain any hardness.\n Hence the experiment is successfull.\n !!THANK YOU!!";
                                e+=1;
                            }
                            if(h==27){
                                textOFinstructions.textContent = "अब आप देखेंगे कि शंक्वाकार फ्लास्क दोनों नीले रंग में बदल गए हैं जो साबित करता है कि पानी में कोई कठोरता नहीं है।\n अतः प्रयोग सफल है.!!\n धन्यवाद!!";
                                h+=1;
                            }
                        }, 1400);
                    }, 5000);
                }, 2400);
            }, 2400);
        }, 400);
        f+=1;
    }
}

//bug here
function next1(){
    if(f==12){
        buretStand.style.opacity="100"
        // window.close();
          
    }
}



// function redvineconicalMOV(){
//     if(f==12){
//         redvineFlask.style.transform="translate(0%,0%)"
//         // EDTAbeaker.style.transform="translate(-55%,-250%)"
//         // WaterOverBurettedrops.style.opacity="100"
        
//         f+=1;
//     }
// }

