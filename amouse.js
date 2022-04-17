function mousePressed (){
  
// MENU
  
   if(tela == 0) {
  //botão jogar 
   if (mouseX >= 24 && mouseX <= 174 && mouseY >= 550 && mouseY <= 595) {
        tela = 1
        console.log ("jogar")
      }
     // botão info 
 // rect(230,550,150,45) //info
   
     if (mouseX >= 230 && mouseX <= 230+150 && mouseY >= 550 && mouseY <= 595) {
        tela = 13
        console.log ("INFO")
      }
    // CREDITOS
    // rect(430,550,150,45) //creditos
     if (mouseX >= 430 && mouseX <= 430+150 && mouseY >= 550 && mouseY <= 595) {
        tela = 14
        console.log ("CRED")
      }
   }  

// FASE 1 - BOTOES
  if (fase == 1){
     if (mouseX >= 405 && mouseX <= 495 && mouseY >= 300 && mouseY <= 330) {
        tela = 5
        console.log("PLAY")   
    }
// GAME OVER
  if (tela==7){   
    //VOLTAR MENU 
    //rect(90,395,168,45)
    if (mouseX >= 90 && mouseX <= 90+168 && mouseY >= 395 && mouseY <= 395+45) {
        tela = 0
        console.log("VOLTAR MENU")   
  }
    //JOGAR DE NOVO
    //rect(345,395,168,45)
    if (mouseX >= 345 && mouseX <= 345+168 && mouseY >= 395 && mouseY <= 395+45) {
        tela = 6
        console.log("DE NOVO")   
      }
   }
}
  if(tela==8){
    //CONTINUAR
    //rect (440,540,150,40)
     if (mouseX >= 440 && mouseX <= 440+150 && mouseY >= 540 && mouseY <= 540+40) {
        tela = 9
        console.log("CONTINUAR")   
      }
  }
   if(tela==10){
    //CONTINUAR
    //rect (440,540,150,40)
     if (mouseX >= 440 && mouseX <= 440+150 && mouseY >= 540 && mouseY <= 540+40) {
        tela = 11
        console.log("CONTINUAR2")   
      }
     
   }

  
 
   //rect(10,8,90,30) VOLTAR 
   if(tela==13){
     if (mouseX >= 10 && mouseX <= 10+90 && mouseY >= 8 && mouseY <= 8+30) {
        tela = 0
        console.log("CONTINUAR2")   
      }
     
   } 
  
  if(tela==15){
  //rect(321,480,219,60)
     if (mouseX >= 321 && mouseX <= 321+219 && mouseY >= 480 && mouseY <= 480+60) {
        tela = 0
        console.log("MENUUU")   
      }
  }
   if(tela==14){ // continuar 
     
      if (mouseX >= 384 && mouseX <= 384+172 && mouseY >= 519 && mouseY <= 519+46) {
        tela = 16
        console.log("continuarrr")   
      }
     
   }
   if(tela==16){ // continuar 
      if (mouseX >= 19 && mouseX <= 19+172 && mouseY >= 519 && mouseY <= 519+46) {
        tela = 0
        console.log("menuuuuuuu")   
      }
     
   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
