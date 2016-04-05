var Enemy = [];

Enemy[0] = cc. Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.enemy1_png );
        this.inMap = 1;
        this.speedX = 0;
        this.speedY = 0;
        this.scheduleUpdate();
    },

    update: function( dt ) {
        this.enemyMove();
    },

    enemyMove: function() {
      if ( this.speedX == 0 ) {
          var nextPositionY = this.getPosition().y+this.speedY;
          var xBlock = ( Math.floor( ( this.getPosition().x )/50 ) ) * 50 + 25;
          var yBlock = ( Math.floor( ( this.getPosition().y )/50 ) ) * 50 + 25;
          if ( this.speedY < 0 )
              yBlock -= 50;
          else if ( this.speedY > 0 )
              yBlock += 50;
          var blockColumn = (xBlock-25)/50;
          var blockRow = (yBlock-25)/50;
          if ( blockMap[this.inMap-1][blockRow][blockColumn] == 'B' && Math.abs(nextPositionY-yBlock) <= 50 )
              this.speedY *= -1;
          else
              this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y+this.speedY ) );
      }
      else if ( this.speedY == 0 ) {
          var nextPositionX = this.getPosition().x+this.speedX;
          var xBlock = ( Math.floor( ( this.getPosition().x )/50 ) ) * 50 + 25;
          var yBlock = ( Math.floor( ( this.getPosition().y )/50 ) ) * 50 + 25;
          if ( this.speedX < 0 )
              xBlock -= 50;
          else if ( this.speedX > 0 )
              xBlock += 50;
          var blockColumn = (xBlock-25)/50;
          var blockRow = (yBlock-25)/50;
          if ( blockMap[this.inMap-1][blockRow][blockColumn] == 'B' && Math.abs(nextPositionX-xBlock) <= 50 )
              this.speedX *= -1;
          else
              this.setPosition( new cc.Point( this.getPosition().x+this.speedX, this.getPosition().y ) );
      }
    }
});
