
    var engbutton=document.getElementById("engbtn")
    var languageSelctorPage=document.getElementById("langSelect")

   var beakermove=document.querySelector("#hard-water-sample")
   var measurmove=document.querySelector("#measuring-cylinder")
   var burettestand=document.querySelector("#burette01")
   var emptyburette=document.querySelector("#ff0")
   var measurwater=document.querySelector("#measur-water")
   var conicalflask1=document.querySelector("#conical-flask1")
   var conicalflask2=document.querySelector("#conicalflask2")
   var funnelimg1=document.querySelector("#funnel1")
   var buffersolution=document.querySelector("#buffer-solution")
   var blacktea=document.querySelector("#black-tea-beaker")
   var dropimg1=document.querySelector("#drop1")
   var funnel2=document.querySelector("#funnel2")
   var dropimg2=document.querySelector("#drop2")
//    var conicalwater=document.querySelector("#conical-water")
   var emptpipette=document.querySelector("#emptypippete")
   var emptpipette2=document.querySelector("#emptypipette2")
    var filledpipette=document.querySelector("#filledpippete")
    var droperdrop=document.querySelector("#bufferdrop")
    var droperwater=document.querySelector("#droper-water")
    var blackdrop=document.querySelector("#blackTdrop")
    var filledblackpipt=document.querySelector("#blackTpipett")
    var coneflsk1=document.getElementById("conical-flask1");        //filled flask
    var coneflsk2=document.querySelector("#conicalflask2");        //red-vien flask
    var DropsInsideConical=document.querySelector("#dropsInsideConical")
    var textOFinstructions=document.getElementById("message-text")
    var e=0; // english instuctions variable
    var h=0;    // hindi instuctions variable

const synth = window.speechSynthesis;
let utterance;
let isSpeechEnabled = true;
let utteranceLang = 'en-IN'; // Default language for speech synthesis

function speakText(text) {
    try{
        if (!isSpeechEnabled) return;
        
        // Cancel any ongoing speech
        synth.cancel();
        
        // Create new utterance
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = utteranceLang // or 'hi-IN' for Hindi
        utterance.rate = 0.9;
        
        // Speak the text
        synth.speak(utterance);
    }
    catch(error) {
        console.error("Speech synthesis error:", error);
    }
}

// Toggle speech function
function toggleSpeech() {
    isSpeechEnabled = !isSpeechEnabled;
    const speechBtn = document.getElementById('speechToggle');
    
    if (isSpeechEnabled) {
        speechBtn.textContent = '🔊 Mute';
        // Speak the current instruction
        const currentText = document.getElementById("message-text").textContent;
        speakText(currentText);
    } else {
        speechBtn.textContent = '🔈 Unmute';
        synth.cancel();
    }
}

    function englang(){
        utteranceLang = 'en-IN'; // Set language to English
        if(e==0){
            languageSelctorPage.style.display = "none";
            setTimeout(() => {
                languageSelctorPage.style.opacity="0"
            }, 500);
            // message will be english
            
            textOFinstructions.textContent = "Click on the HARD WATER SAMPLE BEAKER to start the Experiment";
			speakText(textOFinstructions.textContent);
        }
        e+=1;
        
        
    }
    function hindilang(){
        utteranceLang = 'hi-IN'; // Set language to English
        if(h==0){
            languageSelctorPage.style.display = "none";
       
            textOFinstructions.textContent = "प्रयोग शुरू करने के लिए हार्ड पानी नमूना बीकर पर क्लिक करें";
			speakText(textOFinstructions.textContent);
        }
        h+=1;
    }
    
    var f=0;

    // if(h==1){
    //     textOFinstructions.textContent = "";
    //     h+=1;
    // }

    function Rinsing() {
        // empty ko lekr jaa rha h distilled water
        console.log("Rinsing function called", e, h, f);
        emptpipette2.style.transform= "translate(-800%, 220%) rotate(-90deg)"
        if(e==6.5){            
            textOFinstructions.textContent = "Dropper is rinsed with DISTILLED WATER";
            speakText(textOFinstructions.textContent);
        }
        if(h==6.5){
            textOFinstructions.textContent = "ड्रॉपर को DISTILLED WATER से धोया जाता है";
            speakText(textOFinstructions.textContent);
        }
        setTimeout(function(){
                    emptpipette2.style.transform= "translate(0%,0%) rotate(0deg)"
                                    if(e==6.5){
 
            
                                        textOFinstructions.textContent = "Now click on the dropper";
                                        speakText(textOFinstructions.textContent);
                                        
                                        e+=0.5;
                                    }
                                    if(h==6.5){
                                        textOFinstructions.textContent = "अब दूसरे ड्रॉपर पर क्लिक करें";
                                        speakText(textOFinstructions.textContent);
                                        h+=0.5;
                                    }
                                    f+=0.5;
        }, 3000)
    }

function movehardwater(){
    // textOFinstructions.style.color="blue"
    if(e==1){
        textOFinstructions.textContent = "100ml of Hard Water is poured in the MEASURING CYLINDER.";
        speakText(textOFinstructions.textContent);
        e+=1;
    }
    if(h==1){
        textOFinstructions.textContent = "मापने वाले सिलेंडर के अंदर 100ml कठोर पानी डाला जाता है।";
        speakText(textOFinstructions.textContent);
        h+=1;
    }
    // movement of hardwater to measuring cylinder
    if(f==0){
        // textOFinstructions.textContent = "100ml of Hard Water is poured inside the Measuring Cylinder.";
        beakermove.style.transform= "translate(-25%,-180%) rotate(-60deg)"
        funnelimg1.style.opacity="100"
        setTimeout(function(){
            dropimg1.style.opacity="100"
            setTimeout(function(){
                        measurwater.style.opacity="100"
                    dropimg1.style.opacity="0"
                    setTimeout(function(){
                    beakermove.style.transform= "translate(0%,0%) rotate(0deg)"
                    funnelimg1.style.opacity="0"
                    dropimg1.style.opacity="0"

                    if(e==2){
                        
                        textOFinstructions.textContent = "Now click on MEASURING CYLINDER";
                        speakText(textOFinstructions.textContent);
                        e+=1;
                    }
                    if(h==2){
                        textOFinstructions.textContent = "अब मेसर्जिंग सिलेंडर पर क्लिक करें";
                        speakText(textOFinstructions.textContent);
                        h+=1;
                    }
                },1400)
            },1400)
        },2400)
    
        f+=1;
    }
}


    function movecyldr(){
        // movement of measuring cylinder to conical flask
      if(f==1){
        if(e==3){
            textOFinstructions.textContent = "The 100ml of Hardwater is poured from MEASURING CYLINDER in the CONICAL FLASK";
            speakText(textOFinstructions.textContent);
                     e+=1;
        }
        if(h==3){
            textOFinstructions.textContent = "100ml हार्डवाटर को CONICAL FLASK के सिलेंडर से डाला जाता है";
            speakText(textOFinstructions.textContent);
            h+=1;
        }







        measurmove.style.transform="translate(-20%, -40%) rotate(-60deg)"
        measurwater.style.transform="translate(100%, -115.5%) rotate(-60deg)"
        funnel2.style.opacity="100"
        
        setTimeout(function(){
          measurwater.style.opacity="0"
          dropimg2.style.opacity="100"
        
          setTimeout(function(){
            dropimg2.style.opacity="0"
            funnel2.style.opacity="0"
            DropsInsideConical.style.opacity="100"
            setTimeout(() => {
                DropsInsideConical.style.opacity="0"
                coneflsk1.src="assets/filled volumetric-flask.png"





                if(e==4){
 
                    textOFinstructions.textContent = "Now click on the DROPPER";
                    speakText(textOFinstructions.textContent);
                    e+=1;
                }
                if(h==4){
                    textOFinstructions.textContent = "अब ड्रॉपर पर क्लिक करें";
                    speakText(textOFinstructions.textContent);
                    h+=1;
                }





            }, 1400);
           
        },1400)
        
              
        
        
    },1400)
    setTimeout(function(){
        
      measurmove.style.transform= "translate(0%,0%) rotate(0deg)"
      measurwater.style.transform="translate(0%, 0%) rotate(0deg)"
        funnel2.style.visibility="hidden";
        dropimg2.style.visibility="hidden";
        // conicalwater.style.visibility="visible";
},3000) 
f+=1;
      }
    }


    function emptypipettee(){
    if(f==2){
        //droper(pipette) hawaw mei le jane ke liye


        if(e==5){
 
            
            textOFinstructions.textContent = "3-4 drops of BUFFER SOLUTION are dropped in the CONICAL FLASK with the help of dropper";
            speakText(textOFinstructions.textContent);
            e+=1;
        }
        if(h==5){
            textOFinstructions.textContent = "बफर सोल्यूशन की 3-4 बूंदें ड्रॉपर की मदद से CONICAL FLASK के अंदर गिराई जाती हैं";
            speakText(textOFinstructions.textContent);
            h+=1;
        }


        
        emptpipette.style.transform= "translate(-1500%,-70%) rotate(-90deg)"
    
    setTimeout(function(){
        //droper went inside to buffer solution
        emptpipette.style.transform= "translate(-750%,-70%) rotate(-90deg)"
        
        setTimeout(function(){
            //do not delete this timeout

            setTimeout(function(){
                
                filledpipette.style.opacity="100"

                emptpipette.style.opacity ="0"
                        
               
               
                setTimeout(function(){
                    //droper buffer solution hawa mei
                    emptpipette.style.transform= "translate(-1000%, 263.55%) rotate(-90deg) "
                    filledpipette.style.transform= "translate(0%, -100%)"
                    

                    setTimeout(function(){
                        // hawa se conical flask mei

                        filledpipette.style.transform= "translate(-2740%, -100%)"
                        

                        setTimeout(function(){
                            //conical falsk se gayab
                            filledpipette.style.transform= "translate(-2740%, -30%)"
                            
                            
                            setTimeout(function(){
                                droperdrop.style.opacity="100"
                                
                                filledpipette.style.opacity="0"
                              
                                 emptpipette.style.opacity="100"
                                
                                setTimeout(() => {
                                    droperdrop.style.opacity="0"
                                    emptpipette.style.transform= "translate(-1500%, 263.55%) rotate(-90deg) "
                                    emptpipette.style.opacity="0"
                                    emptpipette2.style.opacity="100"





                                    if(e==6){
 
            
                                        textOFinstructions.textContent = "Now click on the dropper";
                                        speakText(textOFinstructions.textContent);
                                        
                                        e+=0.5;
                                    }
                                    if(h==6){
                                        textOFinstructions.textContent = "अब दूसरे ड्रॉपर पर क्लिक करें";
                                        speakText(textOFinstructions.textContent);
                                        h+=0.5;
                                    }
                            




                               }, 1400);

                                
                            },2400)
                            
                        },2400)
                        
                    },2400)
                    
                },1400)
                
                
            },1400)
           
        },1400)

    },2400)
    f+=0.5;
    }
   }

   function emptypipettee2(){
    console.log("emptypipettee2 function called", f);
    if(f==2.5){
        Rinsing();
    }
    else if(f==3){


        if(e==7){
 
            
            textOFinstructions.textContent = "3-4 drops of EBT INDICATOR are dropped in the CONICAL FLASK with the help of dropper";
            speakText(textOFinstructions.textContent);
            
            e+=1;
        }
        if(h==7){
            textOFinstructions.textContent = "EBT INDICATOR की 3-4 बूंदें ड्रॉपर की मदद से CONICAL FLASK के अंदर गिराई जाती हैं";
            speakText(textOFinstructions.textContent);
            h+=1;
        }




        emptpipette2.style.transform="translate(-1500%, -300%) rotate(-90deg)"
        setTimeout(function(){
            emptpipette2.style.transform="translate(-750%, -300%) rotate(-90deg)"
            setTimeout(function(){
                emptpipette2.style.opacity="0"
               
               filledblackpipt.style.opacity="100"
               //filledblackpipt.style.transitionDuration="0s"
               
                    setTimeout(function(){
                        
                        filledblackpipt.style.transform="translate(0%, -100%)"
                        setTimeout(function(){
                            emptpipette2.style.transform="translate(-979%, 156.8%) rotate(-90deg)"
                            filledblackpipt.style.transform="translate(-3750%, -100%)"
                            setTimeout(() => {
                                filledblackpipt.style.transform="translate(-3750%, -27%)"
                                // emptpipette2.style.transitionDuration="0s"
                                // filledblackpipt.style.transitionDuration="0.9s"
                                if(e==8){
                                                    
                                                    
                                    textOFinstructions.textContent = "You will observe that the water of conical flask turns red";
                                    speakText(textOFinstructions.textContent);
                                    e+=1;
                                }
                                if(h==8){
                                    textOFinstructions.textContent = "आप देखेंगे कि शंक्वाकार फ्लास्क का पानी लाल हो जाता है";
                                    speakText(textOFinstructions.textContent);
                                    h+=1;
                                }
                                setTimeout(() => {
                                    filledblackpipt.style.opacity="0"
                                    emptpipette2.style.opacity="100"
                                    blackdrop.style.opacity="100"
                                    // blackdrop.style.transitionDuration="1s"
                                    setTimeout(() => {
                                        blackdrop.style.opacity="0"
                                        // blackdrop.style.transitionDuration="0s"
                                        setTimeout(() => {
                                            
                                            

                                            // setTimeout(() => {
                                            //     var coneflsk2 = document.getElementById("conicalflask2");
                                            //     if (coneflsk2) {
                                            //         coneflsk2.src = "assets/volumetric-flask.png";
                                            //         emptpipette2.style.opacity = "0";
                                            //         textOFinstructions.textContent = "Click on next button for the step 2 of the experiment";
                                            //     } else {
                                            //         console.error("Element with ID 'conicalflask2' not found.");
                                            //     }
                                            // }, 400);
                                            
                                            setTimeout(function()  {
                                                // coneflsk2.src="D:\vl\refreshed vl\assets\volumetric-flask.png"
                                                coneflsk1.src = "assets/redvine volumetric-flask.png"
                                                // emptpipette2.style.transform="translate(700%, -100%)" //bug here
                                                emptpipette2.style.opacity="0"


                                                if(e==9){
                                                    
                                                    
                                                    textOFinstructions.textContent = "Click on next button for the step 2 of the experiment";
                                                    speakText(textOFinstructions.textContent);
                                                    e+=1;
                                                }
                                                if(h==9){
                                                    textOFinstructions.textContent = "प्रयोग के चरण 2 के लिए अगले बटन पर क्लिक करें";
                                                    speakText(textOFinstructions.textContent);
                                                    h+=1;
                                                }
                                        

                                            }, 400);
                                        }, 200);
                                        
                                    }, 2400);
                                }, 1400);
                            }, 2400);
                        },1000)
                    },3000)
            },2400)
        },2400)

f+=1;
    }
}


var nextbutton =document.getElementById("next-button")
function next1(){
    if(f==4){
        
        
            // Set the URL of the destination page
           // var destinationPage = "C:\Users\risha\OneDrive\Desktop\IITK VISHU\step2.html";
            
            // Navigate to the destination page
            window.location.href = "step2.html";
            f+=1;
            
            
        }
        
    }




    // export const e = 9;
    // export const h = 9;
    // export const f = 5;


