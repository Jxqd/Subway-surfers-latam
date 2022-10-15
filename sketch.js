var path,boy, leftBoundary,rightBoundary, bomb,coinL,drinkL;
var pathImg,boyImg;
var i;
var bombImg, coinImg, drinkImg;

function preload(){
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
  pathImg = loadImage("path.png");
  bombImg = loadImage("bomb.png");
  drinkImg = loadImage("energyDrink.png");
  coinImg = loadImage("coin.png");
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200,200,200,400);
//agregar imagen de path
 path.addImage("path",pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;
path.y = path.height /2
path.velocityY = -14;


//crear sprite de boy (niño)
boy = createSprite(200,200,40,40);
//agregar animación para boy
boy.addAnimation("boy",boyImg);
boy.scale=0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(400,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(220);
  edges= createEdgeSprites();
  path.velocityY = 5;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();

  var select_sprites = Math.round(random(1,3));

  if (frameCount % 50 == 0) {
    if (select_sprites == 1) {
      createBombs();
    } else if (select_sprites == 2) {
     createCoin();
    }else {
      createEnergyDrink();
    }
  }
}

function createBombs() {
  bomb = createSprite(random(50, 350),40, 10, 10);
  bomb.addImage(bombImg);
  bomb.scale=0.1;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
    
  }
  
  function createCoin() {
  coinL = createSprite(random(50, 350),40, 10, 10);
  coinL.addImage(coinImg);
  coinL.scale=0.6;
  coinL.velocityY = 3;
  coinL.lifetime = 150;
  }
  
  function createEnergyDrink() {
  drinkL = createSprite(random(50, 350),40, 10, 10);
  drinkL.addImage(drinkImg);
  drinkL.scale=0.2;
    drinkL.velocityY = 3;
    drinkL.lifetime = 150;
  }
  
