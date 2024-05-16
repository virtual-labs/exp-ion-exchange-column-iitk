

// //zomming the lab
// document.addEventListener('DOMContentLoaded', function() {
//     const img = document.querySelector('.lab');
//     const zoomButton = document.getElementById('next-button');
  
//     zoomButton.addEventListener('click', function() {
//       img.classList.toggle('zoomed_lab');
      
//     });

//   });


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ****************************************************************************************STEP2**********************************************************************************
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// **************************************************************************************variables********************************************************************************
                                                                                        
var hardwatermove=document.querySelector("#hardwater")                                          // hardwater beaker
var funnel1Initial=document.querySelector("#funnel1-step2")                                     //funnel at initial conical flask (hidden)
var funnel2column=document.querySelector("#funnel2-step2")                                      // funnel at the above of the column (hidden)
var dropATinitiaConical=document.querySelector("#drop1-step2")                                  // water drops of hardwater above the funnel1 (hidden)
var dropATcolumn=document.querySelector("#drop2-step2")                                         // water dops of hardwater from conical flask to the above of the funnel2 and column (hidden)
var dropInsideColumn=document.querySelector("#drop-inside-column")                              // water drops inside the column (hidden)
var conflsk1=document.querySelector("#conical1-step2");                                         //empty flask for hardwater 
var conflsk2=document.querySelector("#conical2-step2");                                         // empty flask for hardwater below column
var filledConicalFalsk1Step2=document.querySelector("#filled-conical-falsk1-step2")              // filled conical at initial hardwater (hidden)
var filledConicalFalsk2Step2=document.querySelector("#filled-conical-flask2-step2")             // filled conical below the column (hidden)
var dropp1=document.querySelector("#waterINSIDEflask1")                                               //single drop at initial conical below the funnel (hidden)
var dropp2=document.querySelector("#waterINSIDEflask2")                                               //single drop below the column (hidden)
var emptypiptMOVbuffer=document.querySelector("#emptypipteBuffer1")                             // empty pipett for buffer solution before the movement   
var filledpiptMOVbuffer=document.querySelector("#bufferpipett")                                 //filled pipt of buffer sol
var bufferdrop=document.querySelector("#buffer-drop")                                            // single drop of buffer sol at conical falsk dropped by dropper
var blackTemptypiptMOV=document.querySelector("#blackTemptypipt")                               //empty pippte for blackT sol
var blackTppipetMOV=document.querySelector("#blackTppipet")                                     // filled pippet of blackT sol
var blckTDrop=document.querySelector("#blckTdrop")                                              
var textOFinstructions=document.getElementById("message-text")

// **********************************************************************************end of variables*****************************************************************************
var f=5;
var e=9;
var h=100;

if(e==9){
                                                    
                                                    
    textOFinstructions.textContent = "Click on HARDWATER SAMPLE BEAKER";
    e+=1;
}
if(h==9){
    textOFinstructions.textContent = "हार्डवाटर सैंपल बीकर पर क्लिक करें";
    h+=1;
}



function hardwatermov(){
    
    if(f==5){


        if(e==10){
                                                    
                                                    
            textOFinstructions.textContent = "100ml of Hardwater is poured inside the CONICAL FLASK";
            e+=1;
        }
        if(h==10){
            textOFinstructions.textContent = "100ml हार्डवाटर को CONICAL FALSK के अंदर डाला जाता है";
            h+=1;
        }




        setTimeout(() => {
            //***********hardwater went to conical flask */
            hardwatermove.style.transform= "translate(-15%,-120%) rotate(-60deg)"
            funnel1Initial.style.opacity="100"
            setTimeout(() => {
                dropATinitiaConical.style.opacity="100"  
                
                setTimeout(function() {
                    hardwatermove.style.transform= "translate(0%,0%) rotate(0deg)"
                    dropATinitiaConical.style.opacity="0"
                    dropp1.style.opacity="100"
                    // conflsk1.src="assets/filled volumetric-flask.png"
                    // var flask1=conflsk1;
                    
                    setTimeout(function()  {
                        dropp1.style.opacity="0"
                        funnel1Initial.style.opacity="0"
                        conflsk1.style.opacity="0"
                        
                        filledConicalFalsk1Step2.style.opacity="100"  
                        
                        
                        if(e==11){
                                                    
                                                    
                            textOFinstructions.textContent = "Now click on CONICAL FLASK";
                            e+=1;
                        }
                        if(h==11){
                            textOFinstructions.textContent = "अब CONICAL फ्लास्क पर क्लिक करें";
                            h+=1;
                        }



                        
                    }, 1400);
                }, 1000);
            }, 2400);
        }, 400);
        
        f+=1;
    }
}
function conicalFlaskStep2(){ 
    if(e==12){
                                                    
                                                    
        textOFinstructions.textContent = "100ml of hardwater is poured inside the COLUMN containing SODIUM salt from CONICAL FLASK";
        e+=1;
    }
    if(h==12){
        textOFinstructions.textContent = "CONICAL फ्लास्क से सोडियम नमक युक्त COLUMN के अंदर 100ml कठोर जल डाला जाता है";
        h+=1;
    }



    if(f==6)
    {
        setTimeout(function()  
        {
                //***********conical flsk went to column */
                
                // mov of conical flask to column












            setTimeout(function()  {
                filledConicalFalsk1Step2.style.transform="translate(-270%,-300%) rotate(-60deg)" 
                setTimeout(() => 
                {
                    funnel2column.style.opacity="100"
                    
                    setTimeout(() => 
                    {        
                        filledConicalFalsk1Step2.style.transform=" translate(-270%,-300%) rotate(-90deg)"
                        conflsk1.style.transform="translate(-270%,-300%) rotate(-90deg)"
                        
                        setTimeout(function(){
                            dropATcolumn.style.opacity="100"
                            setTimeout(() => {
                                filledConicalFalsk1Step2.style.opacity="0";  
                                // filledConicalFalsk1Step2.style.transitionDuration="0s"
                                dropInsideColumn.style.opacity="100"
                                conflsk1.style.opacity="100"
                                if(e==13){
                                                    
                                                    
                                    textOFinstructions.textContent = "You will observe that the ions inside the sodium salt will exhange the cations with the hard water";
                                    e+=1;
                                }
                                if(h==13){
                                    textOFinstructions.textContent = "आप देखेंगे कि सोडियम लवण के भीतर के आयन कठोर जल के साथ धनायनों को बाहर निकाल देंगे";
                                    h+=1;
                                }
                            
                                
                                setTimeout(() => {
                                    
                                    conflsk1.style.transform="translate(0%,0%) rotate(0deg)"
                                    setTimeout(() => {
                                        dropATcolumn.style.opacity="0"
                                        setTimeout(function(){
                                            funnel2column.style.opacity="0"
                                            
                                                dropInsideColumn.style.opacity="0"
                                                dropp2.style.opacity="100"
                                                setTimeout(function(){
                                                        //visible filled conical below column 
                                                    dropp2.style.opacity="0"
                                                    filledConicalFalsk2Step2.style.opacity="100"
                                                    conflsk2.style.opacity="0"
                                                    if(e==14){
                                                    
                                                    
                                                        textOFinstructions.textContent = "Now click on the conical flask below the Column";
                                                        e+=1;
                                                    }
                                                    if(h==14){
                                                        textOFinstructions.textContent = "अब कॉलम के नीचे शंक्वाकार फ्लास्क पर क्लिक करें";
                                                        h+=1;
                                                    }
                                                




                                                },1400)
                                            
                                        },2400)
                                    }, 1400);
                                   
                            }, 1400);
                            }, 2400);
                               
                               
                        },2400)
                    }, 1400);
                }, 1400);
                    
                }, 1400);

        }, 400);
        f+=1;
    }
}

function MOVconicalflasktoSPACE(){
    if(e==15){
                                                    
                                                    
        textOFinstructions.textContent = "The conical flask is placed on the table by shifting it from column stand";
        e+=1;
    }
    if(h==15){
        textOFinstructions.textContent = "शंक्वाकार फ्लास्क को स्तंभ स्टैंड से स्थानांतरित करके मेज पर रखा जाता है";
        h+=1;
    }



    if(f==7){
        setTimeout(function(){
            // moving of filled conical flask after the column process to the open area
            // dropp2.style.opacity="100"
            filledConicalFalsk2Step2.style.transform="translate(300% ,0%) rotate(30deg)"
            conflsk1.style.opacity="0"
            setTimeout(() => {
                
                filledConicalFalsk2Step2.style.transform="translate(350% ,15%) rotate(0deg)"


                if(e==16){
                                                    
                                                    
                    textOFinstructions.textContent = "Now click on the DROPER";
                    e+=1;
                }
                if(h==16){
                    textOFinstructions.textContent = "अब ड्रॉपर पर क्लिक करें";
                    h+=1;
                }



            }, 1400);
            
        },400)
        f+=1;
    }
}
function piptmovhardwater(){

    if(e==17){
                                                    
                                                    
        textOFinstructions.textContent = "3-4 drops of BUFFER SOLUTION are dropped inside the CONICAL FLASK with the help of droper";
        e+=1;
    }
    if(h==17){
        textOFinstructions.textContent = "बफर सोल्यूशन की 3-4 बूंदें ड्रॉपर की मदद से CONICAL FLASK के अंदर गिराई जाती हैं";
        h+=1;
    }

    if(f==8){
        //working of pipette for buffer solution
        // and moving of empty pipette of blackT so we can show the working of EBT
        setTimeout(function(){
            emptypiptMOVbuffer.style.transform= "translate(-1800%,-400%) rotate(-90deg)"
            setTimeout(() => {
                emptypiptMOVbuffer.style.transform= "translate(-650%,-450%) rotate(-90deg)"
                setTimeout(() => {
                    
                    emptypiptMOVbuffer.style.opacity="0"
                    emptypiptMOVbuffer.style.transitionDuration="0s"
                    filledpiptMOVbuffer.style.opacity="100"
                    filledpiptMOVbuffer.style.transitionDuration="0s"

                    setTimeout(() => {
                        filledpiptMOVbuffer.style.transform="translate(-650%,-150%)"
                        filledpiptMOVbuffer.style.transitionDuration="2s"
                        setTimeout(() => {
                            filledpiptMOVbuffer.style.transform="translate(-2800%,-150%)"
                            emptypiptMOVbuffer.style.transform= "translate(-900%,-113%) rotate(-90deg)"
                            emptypiptMOVbuffer.style.transitionDuration="2s"
                            setTimeout(() => {
                                filledpiptMOVbuffer.style.transform="translate(-2765%,-30%)"
                                setTimeout(() => {
                                    emptypiptMOVbuffer.style.opacity="100"
                                    setTimeout(() => {
                                        filledpiptMOVbuffer.style.opacity="0"
                                        bufferdrop.style.visibility="visible"
                                        setTimeout(() => {
                                            bufferdrop.style.visibility="hidden"
                                            setTimeout(() => {
                                                emptypiptMOVbuffer.style.opacity="0"
                                                emptypiptMOVbuffer.style.transform= "translate(-2200%,-113%) rotate(-90deg)"
                                                blackTemptypiptMOV.style.opacity="100"

                                                if(e==18){
                                                    
                                                    
                                                    textOFinstructions.textContent = "Now click on the another Droper";
                                                    e+=1;
                                                }
                                                if(h==18){
                                                    textOFinstructions.textContent = "अब दूसरे ड्रॉपर पर क्लिक करें";
                                                    h+=1;
                                                }




                                            }, 1400);
                                        }, 1400);
                                        
                                    }, 1400);
                                }, 1400);
                            }, 1800);
                        }, 1400);
                    }, 1400);

                }, 2400);
            }, 2400);
        },400)
        f+=1;
    }
}

function blackTpiptMOV(){
    if(f==9){
        if(e==19){
                                                    
                                                    
            textOFinstructions.textContent = "3-4 drops of EBT INDICATOR are dropped inside the CONICAL FLASK with the help of droper";
            e+=1;
        }
        if(h==19){
            textOFinstructions.textContent = "EBT INDICATOR की 3-4 बूंदें ड्रॉपर की मदद से CONICAL FLASK के अंदर गिराई जाती हैं";
            h+=1;
        }


        setTimeout(() => {
            
            blackTemptypiptMOV.style.transform="translate(-1500%,-340%) rotate(-90deg)"
            setTimeout(() => {
                blackTemptypiptMOV.style.transform="translate(-450%,-341%) rotate(-90deg)"
                setTimeout(() => {
                    blackTppipetMOV.style.opacity="100"
                    // blackTppipetMOV.style.transitionDuration="0s"
                    setTimeout(() => {
                        blackTemptypiptMOV.style.opacity="0"       //bug
                        blackTemptypiptMOV.style.transitionDuration="0s"
                        blackTppipetMOV.style.transform="translate(0%,-150%)"
                        setTimeout(() => {
                            blackTppipetMOV.style.transform="translate(-1750%,-150%)"
                            setTimeout(() => {
                                blackTemptypiptMOV.style.transform="translate(-780%,-112.5%) rotate(-90deg)"
                                blackTemptypiptMOV.style.transitionDuration="2s"
                                blackTppipetMOV.style.transform="translate(-1875%,-40%)"
                                setTimeout(() => {
                                    blackTemptypiptMOV.style.opacity="100"
                                    setTimeout(() => {
                                        blckTDrop.style.opacity="100"
                                        if(e==20){
                                                    
                                                    
                                            textOFinstructions.textContent = "You will observe that the wate of conical flask turns blue";
                                            e+=1;
                                        }
                                        if(h==20){
                                            textOFinstructions.textContent = "आप देखेंगे कि शंक्वाकार फ्लास्क का पानी नीला हो जाता है";
                                            h+=1;
                                        }
                                        blackTppipetMOV.style.opacity="0"
                                        // blackTppipetMOV.style.transitionDuration="0s"
                                        setTimeout(() => {
                                            blckTDrop.style.opacity="0"
                                            filledConicalFalsk2Step2.src="assets/blue volumetric-flask.png"
                                            setTimeout(() => {
                                                blackTemptypiptMOV.style.transform="translate(-2000%,-112.5%) rotate(-90deg)"
                                                blackTemptypiptMOV.style.opacity="0"

                                                if(e==21){
                                                    
                                                    
                                                    textOFinstructions.textContent = "Click on next button for the step 3 of the experiment";
                                                    e+=1;
                                                }
                                                if(h==21){
                                                    textOFinstructions.textContent = "प्रयोग के चरण 3 के लिए अगले बटन पर क्लिक करें";
                                                    h+=1;
                                                }


                                            }, 1400);
                                        }, 1400);
                                    }, 1400);
                                    
                                }, 1400);
                            }, 2400);
                        }, 1400);
                    }, 1400);
                }, 3400);
            }, 2400);
        }, 400);

        f+=1;
    }
}

var nextbutton =document.getElementById("next-button")
function next1(){
    if(f==10){
        
        {
            // Set the URL of the destination page
           // var destinationPage = "C:\Users\risha\OneDrive\Desktop\IITK VISHU\step2.html";
            
            // Navigate to the destination page
            window.location.href = "step3.html";
            f+=1;
        };


    }

}


