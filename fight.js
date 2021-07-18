class Fight {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        tank = new Tank();
        var tankRef = await database.ref('tankCount').once("value");

        if(tankRef.exists()){
          tankCount = tankRef.val();
          tank.getCount();

        }
      
        form1 = new Form1()
        form1.display();

      }// end if

      
      tank1 = createSprite(80,300);
      tank1.scale = 0.6;
      tank1.addImage(tankI1);
  
      tank2 = createSprite(925,300);
      tank2.scale = 0.6;
      tank2.addImage(tankI2);
      
      tank1.visible = false;
      tank2.visible = false;
      tanks = [tank1, tank2];

      tank.getBullet();
      
    }//end of start

    
  
    play(){

      form1.hide();

      
      console.log(bulletCount);

      Tank.getTankInfo();

      if(allTanks !== undefined){
        imageMode(CENTER);
        image(landI,500,300,1000,600);
        
        var index = 0;

        //x and y position of the cars
        var x = -740;
        var y;
  
        for(var plr in allTanks){
          //add 1 to the index for every loop
          index = index + 1 ;
  
        
          y = 300 - allTanks[plr].y;

          x = x + 830;
          tanks[index-1].y = y;
          tanks[index-1].x = x;
         // console.log(index, player.index)
  

         fill(rgb(131, 136, 125));
         strokeWeight(2);

         if(index === tank.index){
            stroke("red");
          
         }else {
            stroke("black");
            
         }

         textSize(20);
         //stroke("black");
         
         
         text(allTanks[plr].name,x-40,y-40)
  
        }// end of for loop
        
  
      }// end of if(all tanks)

      if(keyIsDown(UP_ARROW) && tank.index !== null && tank.y < 250){
        tank.y+=5
        tank.update();
      }

      if(keyIsDown(DOWN_ARROW) && tank.index !== null && tank.y >-250){
        tank.y-=5
        tank.update();
      }
      
      
      if(keyWentDown("space")){
 
      

      console.log(bulletCount);
      tank.fireBullet();
      tank.updateBullet();

      database.ref('Tanks/tank1/bullets').set({

      

      });

      }

    }//end of play

}//end of class
  