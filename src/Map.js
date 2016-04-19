var blockMap = [  [   ['B','B','B','B','B','B','B','B','B','B','B','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','L',' ',' ','B'],
                      ['B',' ',' ','B',' ','K',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ',' ',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B','B','B','B','B','B','B','B','B',' ',' ','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['B','B','B','B','B','B','B','B','B','B','B','B']   ],
                  [   ['B','B','B','B','B','B','B','B','B','B','B','B'],
                      ['F','L',' ','H','K',' ',' ','H',' ',' ',' ','B'],
                      ['B','H',' ','L',' ','H',' ','L',' ','H',' ','B'],
                      ['B','K',' ','H',' ',' ',' ','H','K',' ',' ','B'],
                      ['B','B','B','B','B','B','B','B','B','B',' ','B'],
                      ['B',' ',' ',' ',' ','H','H',' ',' ',' ',' ','B'],
                      ['B',' ','H','H',' ',' ',' ',' ','H','H',' ','B'],
                      ['B',' ','B','B','B','B','B','B','B','B','L','B'],
                      ['B',' ',' ',' ','B','K',' ','B',' ',' ',' ','B'],
                      ['B','H','H',' ','B',' ',' ','B',' ','H',' ','B'],
                      ['B',' ',' ',' ',' ',' ',' ',' ',' ','B',' ',' '],
                      ['B','B','B','B','B','B','B','B','B','B','B','B']   ]   ];

var Map = [];

Map[0] = cc.Node.extend({
    ctor: function() {
        this._super();
        this.MAP_SIZE = 12;
        this.currentMap = 1;
        this.blockMap = blockMap[this.currentMap-1];
        this.key = [];
        this.numOfKey = 0;
        this.lock = [];
        this.finishPoint = [];
        this.numOfFinishPoint = 0;
        this.hole = [];
        this.numOfHole = 0;
        this.enemy = [];
        this.setPosition( new cc.Point( 0, 0 ) );
        this.createEnemy();
    },
    createBlock: function( row, column ) {
        var block = new Block1();
        block.setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( block );
    },
    createKey: function( row, column ) {
        this.key[this.numOfKey] = new cc.Sprite.create( res.key_png );
        this.key[this.numOfKey].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.key[this.numOfKey] );
        this.numOfKey++;
    },
    createFinishPoint: function( row, column ) {
        this.finishPoint[this.numOfFinishPoint] = new cc.Sprite.create( res.finish_png );
        this.finishPoint[this.numOfFinishPoint].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.finishPoint[this.numOfFinishPoint] );
        this.numOfFinishPoint++;
    },
    createLockWay: function() {
        for ( var i = 0 ; i < this.key.length ; i++ ){
            this.lock[i] = new cc.Sprite.create( res.lockdoor_png );
            this.addChild( this.lock[i] );
        }
        this.lock[0].setPosition( new cc.Point( 425, 75 ) );
    },
    createEnemy: function() {
        for( var i = 0 ; i < 4 ; i++ ) {
            this.enemy[i] = new Enemy[0]();
            this.addChild( this.enemy[i] );
        }
        this.enemy[0].setPosition( new cc.Point( 325, 275 ) );
        this.enemy[0].speedX = 1.25;
        this.enemy[1].setPosition( new cc.Point( 325, 125 ) );
        this.enemy[1].speedX = -1.25;
        this.enemy[2].setPosition( new cc.Point( 275, 475 ) );
        this.enemy[2].speedY = 1.25;
        this.enemy[3].setPosition( new cc.Point( 425, 475 ) );
        this.enemy[3].speedY = -1.25;
    },
    createHole: function( row, column ) {
        this.hole[this.numOfHole] = new cc.Sprite.create( res.hole_png );
        this.hole[this.numOfHole].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.hole[this.numOfHole] );
        this.numOfHole++;
    }

});

Map[1] = cc.Node.extend({
    ctor: function() {
      this._super();
      this.MAP_SIZE = 12;
      this.currentMap = 2;
      this.blockMap = blockMap[this.currentMap-1];
      this.key = [];
      this.numOfKey = 0;
      this.lock = [];
      this.finishPoint = [];
      this.numOfFinishPoint = 0;
      this.hole = [];
      this.numOfHole = 0;
      this.enemy = [];
      this.setPosition( new cc.Point( 0, 0 ) );
      //this.createEnemy();
    },
    createBlock: function( row, column ) {
        var block = new Block1();
        block.setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( block );
    },
    createKey: function( row, column ) {
        this.key[this.numOfKey] = new cc.Sprite.create( res.key_png );
        this.key[this.numOfKey].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.key[this.numOfKey] );
        this.numOfKey++;
    },
    createFinishPoint: function( row, column ) {
        this.finishPoint[this.numOfFinishPoint] = new cc.Sprite.create( res.finish_png );
        this.finishPoint[this.numOfFinishPoint].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.finishPoint[this.numOfFinishPoint] );
        this.numOfFinishPoint++;
    },
    createLockWay: function() {
        for ( var i = 0 ; i < this.key.length ; i++ ){
            this.lock[i] = new cc.Sprite.create( res.lockdoor_png );
            this.addChild( this.lock[i] );
        }
        this.lock[0].setPosition( new cc.Point( 175, 125 ) );
        this.lock[1].setPosition( new cc.Point( 75, 75 ) );
        this.lock[2].setPosition( new cc.Point( 375, 125 ) );
        this.lock[3].setPosition( new cc.Point( 525, 375 ) );
    },

    createHole: function( row, column ) {
        this.hole[this.numOfHole] = new cc.Sprite.create( res.hole_png );
        this.hole[this.numOfHole].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.addChild( this.hole[this.numOfHole] );
        this.numOfHole++;
    }
});

Map[2] = cc.Node.extend({
    ctor: function() {
        this._super();
    }
});
