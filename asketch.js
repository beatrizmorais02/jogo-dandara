var tela = 0
var fase = 1
var personagemd = [];
var personageme = [];
var personagemf = [];
var personagemt = [];
var figura = [];
var figura2 = [];
// VARIAVEIS 
var x = 0 
var y = 480
var px = 0
var py = 0 
var v = 2
var v2 = 2
var y2 = 360;
var x_a = 100;
var y_a = 100;
var b_x = -70;
var b_y= -90;
var x_t = 60;
var y_t = 70;
var a = 0;
var a2 = 5 
var n = 1;
var vida = 3;
var score = 0;
var nivel = 1;
var fig = 0;
var fig2 = 0;
var andar = 0
var andar2 = 0;
var andar3 = 0;
var andar4 = 0;
var andar5 = 0;
var tempo  = 0;
var tempo2 = 0;
var tempo3 = 0;
var tempo4 = 0;
var tempo5 = 0;
var velocidade = 4
var capturou = 0

//FASE 2
var score2 = 0
var xO2 = 0
var yO2 = 0
var xf2 = 300
var yf2 =500
var xobstaculo = 40
var yobstaculo = 40
var tempo6 = 0
var andar6 = 0
var xF2_a = 100
var yF2_a = 100
var pegou = 0
var p_x = 90
var p_y = 0
var velocidade2 = 4

// VAR TEXTOS 
var texto = '- Olá me chamo Dandara dos Palmares! -O meu sobrenome revela de onde eu sou. Morei no maior Quilombo conhecido do período colonial do Brasil, o Quilombo dos Palmares, localizado na Serra da Barriga, atual estado de Alagoas, mas que durante o Brasil Colonial, pertencia a região da Capitania de Pernambuco. Palmares foi fundado final do século XVI e se estabeleceu por um século. Acolhendo mais de 20 mil pessoas, entre negros, índios e mestiços que fugiam dos horrores da escravidão ou da miséria, por isso, se tornou o maior símbolo de resistência contra a escravização durante o Brasil Colonial.'

var texto2 = '- Juntamente com meu esposo, o Zumbi dos Palmares, lutei contra várias expedições organizadas pelo governo português e holandês. Muitas vezes, eles contratavam bandeirantes através do “sertanismo de contrato” para perseguir os escravos que fugiam dos seus cativeiros. Por causa da minha resistência, sou considerada uma grande guerreira, por organizar estratégias contra aqueles que pensavam em destruir Palmares.Eu lutava capoeira e liderei grandes exércitos em Palmares.'

var texto3 = '- A escravidão foi uma realidade no Brasil por quase quatrocentos anos. Milhões de africanos foram expulsos de suas terras e foram trazidos como escravizados. Eles eram proibidos de praticar seus costumes e tradições, além de sofrer duros castigos físicos e e ficarem separados de seus familiares e amigos. Uma das formas de lutar contra a escravização era fugindo para os quilombos, onde eles podiam vivenciar suas culturas e tradições além, de praticar a agricultura e a criação de animais com liberdade.'

var texto4 = 'Quero te convidar a viver uma grande aventura comigo, me ajudando a vencer as expedições dos bandeirantes que querem destruir Palmares. Com isso, você também irá conhecer um pouco mais da minha história e cultura.  Vamos juntos?!'

var texto5 = '-OH NÃO! Os bandeirantes querem entrar em Palmares e acabar com a nossa colheita e criação de animais!-Me ajude a coletar o máximo de produtos e animais para nos livrar dos bandeirantes!'

var texto6 = '- Você capturou uma banana! Que legal!!'

var texto7 = 'Salvamos uma galinha!'

var texto8 = '-Manga!'


// FASE 2
var texto9 = 'Manter viva a nossa cultura e tradições era uma forma de estarmos ligados ao nosso povo e ancestrais, por isso, no Quilombo dos Palmares era comum as rodas de capoeira e as danças trazidas pelos nossos ancestrais africanos, além dos cultos das religiões de matrizes africanas. Nos cativeiros, o meu povo era proibido de praticar essas manifestações. Mas aqui, em Palmares, eles são livres para praticarem qualquer manifestação cultural ou religiosa!'

var texto10  ='- Me ajude a manter viva a cultura africana do Quilombo dos Palmares coletando o máximo de objetos que representam a cultura africana! '

var timetela1 = 45
var timetela2 = 35
var timetela3 = 39
var timetela5 = 15
var timetela9 = 32
var timetela10 = 9
var contador_texto = 0
var contador_texto2 = 0
var contador_texto3 = 0
var contador_texto4 = 0
var contador_texto5 = 0
var contador_texto6 = 0
var contador_texto7 = 0
var contador_texto8 = 0 
var contador_texto9 = 0
var contador_texto10 = 0
var tempo_texto = 0 
var tempo_texto2 = 0
var tempo_texto3 = 0
var tempo_texto4 = 0
var tempo_texto5 = 0
var tempo_texto6 = 0
var tempo_texto7 = 0
var tempo_texto8 = 0
var tempo_texto9 = 0
var tempo_texto10 = 0

//SETUP 
function setup() {
  createCanvas(600, 600);
  msc = createAudio ('objetos/song1.mp3')
  msc.loop(true);
  msc.autoplay(true);
  
}
// TEXTOS 
function textos (){
    textSize(15)
    fill(20)
    textFont(txt)
}
// VOLTAR
function botãoV (){
     noStroke()
     fill('#F5B308')
     rect(10,8,90,30)
     textSize(12);
     fill(0,0,0);
     textSize(12);
     text("Voltar",20,28)
}
//TELA MENU
function telaMenu(){
    background (tela_menu)
    fill('#F5B308')
    noStroke()
    rect(24,550,150,45)  // jogar
    rect(230,550,150,45) //info
    rect(430,550,150,45) //creditos
    fill(0,0,0)
    noStroke()
    textFont(titulo)
    textSize(16)
    text("Jogar",60,580)
    text("Info", 280,580)
    text("Creditos",450,580)
  
}

// COMANDOS DANDARA PARA OS LADOS 

function dlados() {
   //DIREITA
    if (keyIsDown(RIGHT_ARROW)) {
      image (personagemd[andar%3], x, y,68,80) // img da dandara direita
        if (x < 590 - 70) {
        x = x + 10 }
        tempo++;
          if(tempo>10){
          andar++;
          tempo = 7; }
     }
  //ESQUERDA 
    if (keyIsDown(LEFT_ARROW)) {
      image(personageme[andar2%3],x,y,68,80)
      if (x > -10) {
        x = x - 5;}
      tempo2++
      if(tempo2>10){
        andar2++
        tempo2 = 5 }
     }
}
// FASE 2
function dlados2() {
   //DIREITA
    if (keyIsDown(RIGHT_ARROW)) {
      image (personagemd[andar%3], xf2, yf2,80,90) // img da dandara direita
        if (xf2 < 590 - 70) {
        xf2 = xf2 + 10 }
        tempo++;
          if(tempo>10){
          andar++;
          tempo = 7; }
     }
  //ESQUERDA 
    if (keyIsDown(LEFT_ARROW)) {
      image(personageme[andar2%3],xf2,yf2,80,90)
      if (xf2 > -10) {
        xf2 = xf2 - 5;}
      tempo2++
      if(tempo2>10){
        andar2++
        tempo2 = 5 }
     }
}
// COMANDOS DANDARA PARA CIMA/BAIXO
function dcb (){
   //FRENTE
    if (keyIsDown(DOWN_ARROW)) {  //frente 
       image(personagemf[andar3%3],x,y,68,80)
        if (y < 590 - 70) {
          y += 5;}
        tempo3 ++;
          if(tempo3>10){
            andar3++;
            tempo3=5}
     }
  // TRAS
    if (keyIsDown(UP_ARROW)) {
        image(personagemt[andar4%3],x,y,68,80)
        if (y > -15) {
          y -= 5; }
        tempo4 ++;
         if(tempo4>10){
            andar4++;
            tempo4=5}
      }
}
// PRELOAD 
function preload(){
  titulo = loadFont ("fontes/menu.TTF")
  txt = loadFont('fontes/txt.otf')
  telafim = loadImage('fundos/tela_fim.png')
  tela_info = loadImage('fundos/tela_info.png')
  tela_cred = loadImage('fundos/tela_cred.png')
  tela_cred2 = loadImage('fundos/tela_cred2.png')
  tela_menu = loadImage('fundos/tela_menu.png')
  tela_texto = loadImage('fundos/tela_texto.png')
  tela_pre1 = loadImage ('fundos/tela_pre.png')
  tela_fase1 = loadImage ('fundos/fase1.png')
  tela_over = loadImage ('fundos/tela_over.png')
  tela_fase2 = loadImage ('fundos/tela_fase2.png')
  tela_prox = loadImage ('fundos/parabens.png')
  tela_banana = loadImage ('fundos/tela_banana.png')
  tela_manga = loadImage ('fundos/tela_manga.png')
  tela_galinha = loadImage ('fundos/tela_galinha.png')
  bandeirante = loadImage ('objetos/bandeirante.png')
  coração = loadImage ('fundos/heart2.png')
  frente = loadImage ('d_frente/frente_0.png')
  pandeiro = loadImage ('objetos/pandeiro.png')
 
  

// ANIMAÇÃO 
  for(c=0;c<3; c++){
     personagemd [c] = loadImage("d_direita/direita_"+c+".png")
  }  //DIREITA
  for(c=0;c<3;c++){
    personageme[c] = loadImage("d_esquerda/esquerda_"+c+".png")
  }  //ESQUERDA
   for(c=0;c<3;c++){
    personagemf[c] =loadImage("d_frente/frente_"+c+".png")
  }
   for(c=0;c<3;c++){
    personagemt[c] =loadImage("d_tras/costas_"+c+".png")
  } //TRAS

//OBJETOS
  figura [0] = loadImage ('objetos/banana.png')
  figura [1] = loadImage ('objetos/palmeira.png')
  figura [2] = loadImage ('objetos/manga_.png')
  figura [3] = loadImage ('objetos/galinha.png')
    
/* ---------- FASE 2 ------------- */
  figura2 [0] = loadImage ('objetos/pandeiro.png')
  figura2 [1] = loadImage ('objetos/tambor.png')
  figura2 [2] = loadImage ('objetos/berimbau.png')
}

// VIDA SCORE
function vidaScore(){
    noStroke();
    fill(20);
    fill(255);
    textFont(txt);
    textSize (16)
      text('Vidas: ' + vida, 40, 70);
      text('Score: ' + score,40, 50);
      text('Nível: ' + nivel,40, 30);
    image(coração, 105, 53, 20, 20);
}
function vidaScore2(){
    noStroke();
    fill(20);
    fill(0);
    textFont(txt);
    textSize (16)
      text('Vidas: ' + vida, 40, 70);
      text('Score: ' + score2,40, 50);
      text('Nível: ' + nivel,40, 30);
    image(coração, 100, 53, 20, 20);
}
function draw() {
  
  if(tela==0){
    telaMenu()
  }  // TELA MENU 
  
/*------------------------------------------------------*/    
  
// TELA JOGAR - TEXTOS (1-5)    
    if(tela==1){
    background (tela_texto)
  
    
      
//TELA TEXTO 1
      textos()
      text(texto.substring(0,contador_texto), 75, 90, 450, 500);
      if(tempo_texto > 3.5){
        contador_texto++
        tempo_texto = 0
       }
        tempo_texto++
    
    //tempo da tela 
  
      if(frameCount % 60 === 0){
        timetela1--;
      }
      if(timetela1 <= 0){
        tela = 2
      }
    }
    
// TELA TEXTO 2    
    if(tela==2){
    background (tela_texto)
      textos()
      text(texto2.substring(0,contador_texto2), 75, 90, 450, 500);
      if(tempo_texto2 > 3.5){
        contador_texto2++
        tempo_texto2 = 0
          }
        tempo_texto2++
       //tempo da tela 
  
      if(frameCount % 60 === 0){
        timetela2--;
      }
      if(timetela2 <= 0){
         tela = 3
      }
    }
    
// TELA TEXTO 3    
    if (tela==3){
    background (tela_texto)
      textos()
      text(texto3.substring(0,contador_texto3), 75, 90, 450, 500);
      if(tempo_texto3 > 3.5){
        contador_texto3++
        tempo_texto3 = 0
        }
        tempo_texto3++
    
//tempo da tela 
      if(frameCount % 60 === 0){
        timetela3--;
      }
      if(timetela3 <= 0){
         tela = 4
      }
    }

// TELA TEXTO 4
    if (tela==4){
    background (tela_texto)
      textos()
      text(texto4.substring(0,contador_texto4), 75, 90, 450, 500);
      if(tempo_texto4 > 3.5){
        contador_texto4++
        tempo_texto4 = 0
        }
        tempo_texto4++
     
      // BOTÃO JOGAR
        noStroke()
        fill('#F5B308')
        rect(405,300,90,30)
        textSize(12);
        fill(0,0,0);
        textSize(14);
        textFont(titulo);
        text("PLAY",422,322);
    }
    
/* -----------------------------------------------------*/    
    
// TELA PRÉ - FASE 1  
    if (tela==5){
      background(tela_pre1);
      textos()
      text(texto5.substring(0,contador_texto5), 130, 250, 400, 500);
        if(tempo_texto5 > 3.5){
          contador_texto5++
          tempo_texto5 = 0
        }
          tempo_texto5++
    
    //tempo da tela 
  
      if(frameCount % 60 === 0){
        timetela5--;
      }
      if(timetela5 <= 0){
         tela = 6
      }
    }

// FASE 1 ----------------------------------------------
    if (tela==6){
      background (tela_fase1)
// VIDAS E SCORES
      vidaScore()
      image (frente,x,y,68,80)
// COMANDOS DA DANDARA
      dlados(x,y)
      dcb ()
    
  
if(fase==1){
   
// COMANDOS DO BANDEIRANTE 
      image (bandeirante,a,y2,150,150)
      tempo5 ++
      if(tempo5>10){
        andar5 ++
        tempo5 = 5 } 
        a = a + velocidade;
      if (a > 560) {
        velocidade = -4;
      }
      if (a < -10) {
        velocidade = 4;
      }
// OBJETOS PARA CAPTURAR
    if ( capturou <= 5 ){
      image(figura[fig], x_a, y_a, 100, 100)  
    } 
      
if (score == 10) {
    tela = 6
    image(tela_banana,20,100,500,500)
    
//textos 
    textSize(15)
    fill(28)
    textFont(txt)
    text(texto6.substring(0,contador_texto6), 145, 445, 450, 500);
    if(tempo_texto6 > 2.5){
      contador_texto6++
      tempo_texto6 = 0
        }
      tempo_texto6++
    tela = 6
    
 }
  else if (score == 60) {
    tela = 6
    image(tela_galinha,20,100,500,500)
    
//textos 
    textSize(15)
    fill(28)
    textFont(txt)
    text(texto7.substring(0,contador_texto7), 165, 445, 450, 500);
    if(tempo_texto7 > 2.5){
      contador_texto7++
      tempo_texto7 = 0
        }
      tempo_texto7++
    tela = 6
  }
  
  else if (score == 110) {
    tela = 6
    image(tela_manga,20,100,500,500)
    
//textos 
    textSize(15)
    fill(28)
    textFont(txt)
    text(texto8.substring(0,contador_texto8), 165, 445, 450, 500);
    if(tempo_texto8 > 2.5){
      contador_texto8++
      tempo_texto8 = 0
        }
      tempo_texto8++
    tela = 6
  }
  
//NIVEL 2 
    if (score >= 80) {
      image(bandeirante,b_x, b_y, 150,150);
      b_x = b_x + v;
      b_y = b_y + v2;
      tempo5 ++
      if(tempo5>10){
        andar5 ++
        tempo5 = 5 
      }
      if (b_x > 550) {
        v = -2
      }
      if (b_x < 0) {
        v = 2
      }
      if (b_y > 450) {
        v2 = -2
      }
      if (b_y < 0) {
        v2 = 2
      }
      image(figura[fig], x_a, y_a, 100, 100);
      if (score == 70) {
        tela = 6
        }
    }  
    if (dist(b_x + 25, b_y + 35, x + x_t / 2, y + y_t / 2) <= 25 + y_t / 2) {
        vida = vida - 1;
        x = 170;
        y = 320;
        if (vida == 0) {
          tela = 6;
        }
      }
// COMANDO DO CAPTUROU NIVEL 2
    if (dist(x_a + 25, y_a + 25, x + x_t / 2, y + y_t / 2) <= 25 + y_t / 2) {
      x_a = random(50, 450);
      y_a = random(50, 450);
      
    if(capturou<=4){
        capturou = capturou + 1
        score = score + 10 
    } 
    else if(capturou==5){
      capturou = 0 
    if(fig==0){
      fig=1
   }
     else {
      fig = 0
      }
    if(fig==1){
      fig = 2
    } else {
      fig =1
    }
    if(fig==2){
      fig = 3
    } else {
      fig =2
    }
    if (score == n*100) {
       nivel += 1;
       n += 1;
       x_t += 10;
       y_t += 10;
        }
      }      
    }  
// GAME OVER
    if (dist(a + 25, 360 + 35, x + 25, y + 35) <= 25 + 35) {
      vida = vida - 1;
      x = 80;
      y = 450;
      if (vida <= 0) {
      tela = 7;
      score = 0
      capturou = 0
      fig = 0
      
      } else if (score == 150){
        tela=8
      }
    }
    if (tela == 7) {
    if (mouseX > 412 && mouseX < 412 + 70 && mouseY > 20 && mouseY < 20 + 70) {
      if (mouseIsPressed) {
        tela = 6;
        vida = 3;
        score = 0;
        nivel = 2;
        n = 2;
       capturou = 0;
        fig = 0;
        x = 170;
        y = 320;
      
  
      }
    }
  // TEXTO GAME OVER
      background(tela_over)
      vida = 3
      score = 0
      nivel = 1
      noStroke()
        fill('#F5B308')
        rect(90,395,168,45)
        rect(345,395,168,45)
        fill(0,0,0)
        textSize(20)
        textFont (titulo)
        text('MENU',135,425)
        text('DE NOVO',370,425)
    } 

//PROXIMA FASE
  if (nivel == 2 && score >= 150) {
    tela = 8 
    }       
  }
}  
     if(tela==8){
    background(tela_prox)
    fill('#F5B308')
    rect (440,540,150,40)
    fill(0)
    textFont(titulo)
    text ('CONTINUAR',455,565)
  }
  
// FASE 2 - TEXTOS 9 E 10 

  // TEXTO 9
    if (tela==9){
    background (tela_texto)
    textos()
    text(texto9.substring(0,contador_texto9), 75, 90, 450, 500);
    if(tempo_texto9 > 2.5){
      contador_texto9++
      tempo_texto9 = 0
        }
      tempo_texto9++
    
    //tempo da tela 
  
    if(frameCount % 60 === 0){
      timetela9--;
    }
    if(timetela9 <= 0){
       tela = 10
      }    
 } 
  // TEXTO 10
    if (tela==10){
     background (tela_texto)
     textos()
     text(texto10.substring(0,contador_texto10), 75, 90, 450, 500);
     if(tempo_texto10 > 2.5){
       contador_texto10++
       tempo_texto10 = 0
        }
       tempo_texto10++
    fill('#F5B308')
    rect (440,540,150,40)
    fill(0)
    textFont(titulo)
    text ('CONTINUAR',455,565)
    //
  }

    if(tela==11){
      background (tela_fase2)
// VIDAS E SCORES
      vidaScore2()
      image (frente,xf2,yf2,80,90)
// COMANDOS DA DANDARA
      dlados2()  
// NIVEL 1 ---------------------------
  // OBEJTOS CAINDO DO CEU
      
    image (figura2[fig2],xO2,yO2,110,110)
    tempo6 ++
    if(tempo6>10){
      andar6 ++
      tempo6 = 5 
      
    } 
    
    yO2 = yO2 + velocidade2;
     if (yO2 == 600) {
        velocidade2 = 6;
        xO2 = random (50,550) 
      }
     if (yO2 == 600) {
        yO2 = 0;
      }
      
// ELIPSES DO PERSONAGEM      
   ellipse(xf2, yf2, 1) 
// ELIPSES DO OBJETO  
   ellipse(xO2, yO2,1)
      
      
      
// GANHOU SCORE
  
    if(dist(xf2, yf2, xO2, yO2) <= 40){
        yO2 = 0
        xO2 = random (50,550) 

          console.log("iupi")
          score2 = score2 + 10
          if(score2 >= 10){
            xf2 = 0;
            yf2 = 500;
            console.log("já deu, minha filha")
          }
              pegou = pegou + 1;
             if (pegou >= 1) {
              pegou = 0;
              if (fig2 == 0) {
              fig2 = 1
            } else {
                fig2= 0;
              }
            }
      
      if(score==n*10){
        nivel +=1
        n+=1
      }
       if(score>=50){
       nivel = 2
        n+= 1
       
     } 
      
      if (score2 == 60){ //FIM
        tela = 15
      }
        }
      
    
      
  
       
   
     
   
      
  
    }  
  
  

// TELA INFO
  if(tela==13){
    background(tela_info)
    botãoV()
  }
// TELA CRED
  if(tela==14){
    background(tela_cred)
    
  } 
  if(tela==16){
    background(tela_cred2)
    
  }  
  
if (tela==15){
  background(telafim)
}  
  
  
  
  
  
  
  
}