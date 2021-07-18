class Tank {
    constructor(){
      this.index = null;
      this.y = 0;
      this.name = null;
      this.hitpoints = 150;
      this.bullets = null;
      this.x = 0;

      
      
    }
  
    updateCount(count){
      database.ref('/').update({
        tankCount: count
      });
    }

    getCount(){
        var tankRef = database.ref('tankCount');
        tankRef.on("value",(data)=>{
          tankCount = data.val();
        })
      }

    getBullet(){
      //var bulletRef = "Tanks/tank" + this.index + "bullets";
      database.ref('Tanks/tank1/bullets').on("value",(data)=>{
        bulletCount = data.val();
      });

    }

    
    update(){
      var tankIndex = "Tanks/tank" + this.index;
      database.ref(tankIndex).set({
        name:this.name,
        x:this.x,
        y:this.y,
        hitpoints:this.hitpoints,
        bullets:50

      });//end of set

    }//end of update

    updateBullet(){
      
      database.ref('Tanks/tank1').update({
        bullets:bulletCount 

      });//end of ypdate

    }//end of update


    static getTankInfo(){
      var tankInfoRef = database.ref('Tanks');
      tankInfoRef.on("value",(data)=>{
        allTanks = data.val();
      })


    }

    fireBullet(){
      if(this.index === 1){
        
        bullet1 = createSprite(tank1.x + 130,tank1.y,1,1);
        bullet1.scale = 0.15;
        bullet1.addImage(bulletI);
        bullet1.velocityX = 5;

        bulletCount-=1;

      } else if(this.index === 2){

        bullet2 = createSprite(tank2.x - 130,tank2.y,1,1);
        bullet2.scale = 0.15;
        bullet2.addImage(bulletI);
        bullet2.velocityX = -5;

      }
    }

}//end of class