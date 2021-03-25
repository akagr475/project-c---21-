var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4 ;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,590,180,20);
    surface1.shapeColor="red";
    surface2 = createSprite(300,590,180,20);
    surface2.shapeColor="green";
    surface3 = createSprite(500,590,180,20);
    surface3.shapeColor="blue";
    surface4 = createSprite(700,10,10,20);
    surface4.shapeColor="yellow";

     box = createSprite(random(10,750),300,20,20,20);
     box.shapeColor = "white";
     box.velocityX=3;
     box.velocityY=3;
     


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    if(box.x<0){
        music.stop()
        box.velocityX=3;

    }
    else if(box.x>800){
        music.stop()
        box.velocityX=-3

        if(isTouching(box,surface4)){
            music.play()
            box.shapeColor="yellow";
         }
         else if (isTouching(box,surface3)){
             music.stop()
             box.shapeColor="blue";
         }
         else if (isTouching(box,surface2)){
             music.stop()
             box.shapeColor="green";
             bounceOff(box,surface2)
             box.velocityX=0;

         }

         else if(isTouching(box,surface1)){
             music.stop()
             box.shapeColor="red";
             bounceOff(box,surface1)
         }

         if (box.y<0){
             music.stop()
             box.velocityY=3
         }






         drawSprites()

         function isTouching(object1,object2){
             if (object1.x-object2.x<object2.width/2 + object1.width/2
                && object2.x-object2.x<object2.width/2 + object1.width/2
                && object1.y-object2.y<object2.height/2 + object1.height/2
                && object1.y-onject2.y<object2.height/2 + object1.height/2){

                    return true;
                }
                else{
                    return false;
                
                }

         }


         function bounceOff(object1,object2){

            if (object1.x-object2.x<object2.width/2 + object1.width/2
                && object2.x-object2.x<object2.width/2 + object1.width/2){
                    
                    object1.veloctyY=object1.veloctyY*-1
                    object2.veloctyY=object2.veloctyY*-1
            }

            if (object1.y-object2.y<object2.height/2 + object1.height/2
                && object1.y-onject2.y<object2.height/2 + object1.height/2){
                   
                    object1.veloctyY=object1.veloctyY*-1
                    object2.veloctyY=object2.veloctyY*-1
                
                if (object1.y<0){
                    object1.velocityX=3      
                }
                 else if (object2.y<1200){
                     object2.velocityX=-3
                 }
                }
                
            