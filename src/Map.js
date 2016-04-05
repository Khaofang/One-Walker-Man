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
        this.enemy = [];
        this.createMap( this.blockMap );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.createEnemy();
    },

    createMap: function() {
        for ( var row = 0 ; row < this.MAP_SIZE ; row++ ) {
            for ( var column = 0 ; column < this.MAP_SIZE ; column++ ) {
                this.blockMap[row][column].toUpperCase();
                if ( this.blockMap[row][column] == 'B' )
                    this.createBlock( row, column );
                else if ( this.blockMap[row][column] == 'F' )
                    this.createFinishPoint( row, column );
                else if ( this.blockMap[row][column] == 'K' )
                    this.createKey( row, column );
            }
        }
        this.createLockWay();
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
        this.enemy[0].speedX = 2.5;
        this.enemy[1].setPosition( new cc.Point( 325, 125 ) );
        this.enemy[1].speedX = -2.5;
        this.enemy[2].setPosition( new cc.Point( 275, 475 ) );
        this.enemy[2].speedY = 2.5;
        this.enemy[3].setPosition( new cc.Point( 425, 475 ) );
        this.enemy[3].speedY = -2.5;
    }

});

Map[1] = cc.Node.extend({
    ctor: function() {
        this._super();
    }
});

Map[2] = cc.Node.extend({
    ctor: function() {
        this._super();
    }
});
