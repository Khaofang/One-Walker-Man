var blockMap = [  [   ['B','B','B','B','B','B','B','B','B','B','B','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['F',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B'],
                      ['B','B','B','B','B','B','B','B','B',' ',' ','B'],
                      ['B',' ',' ',' ',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B','K',' ',' ',' ','B',' ',' ','B'],
                      ['B',' ',' ','B',' ',' ',' ',' ','L',' ',' ','B'],
                      ['B','B','B','B','B','B','B','B','B','B','B','B']   ]   ];

var Map = [];

Map[0] = cc.Node.extend({
    ctor: function() {
        this._super();
        this.MAP_SIZE = 12;
        this.numMap = 1;
        this.blockMap = blockMap[this.numMap-1];
        //this.key = null;
        this.createMap( this.blockMap );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.createEnemy();
    },

    createMap: function() {
        for ( var row = 0 ; row < this.MAP_SIZE ; row++ ) {
            for ( var column = 0 ; column < this.MAP_SIZE ; column++ ) {
                if ( this.blockMap[row][column] == 'B' )
                    this.createBlock( row, column );
                else if ( this.blockMap[row][column] == 'F' )
                    this.createFinishPoint( row, column );
                else if ( this.blockMap[row][column] == 'K' )
                    this.createKey( row, column );
                else if ( this.blockMap[row][column] == 'L' )
                    this.createLockWay( row, column );
            }
        }
    },
    createBlock: function( row, column ) {
        var block = new Block1();
        block.setPosition( new cc.Point( column*50+25, (this.MAP_SIZE-row-1)*50+25 ) );
        this.addChild( block );
    },
    createKey: function( row, column ) {
        this.key = new cc.Sprite.create( res.key_png );
        this.key.setPosition( new cc.Point( column*50+25, (this.MAP_SIZE-row-1)*50+25 ) );
        this.addChild( this.key );
    },
    createFinishPoint: function( row, column ) {
        var block = new cc.Sprite.create( res.finish_png );
        block.setPosition( new cc.Point( column*50+25, (this.MAP_SIZE-row-1)*50+25 ) );
        this.addChild( block );
    },
    createLockWay: function( row, column ) {
        this.lock = new cc.Sprite.create( res.lockdoor_png );
        this.lock.setPosition( new cc.Point( column*50+25, (this.MAP_SIZE-row-1)*50+25 ) );
        this.addChild( this.lock );
    },
    createEnemy: function() {
        this.enemy = [];
        for( var i = 0 ; i < 4 ; i++ ) {
            this.enemy[i] = new Enemy1();
            this.addChild( this.enemy[i] );
        }
        this.enemy[0].setPosition( new cc.Point( 325, 275 ) );
        this.enemy[1].setPosition( new cc.Point( 325, 175 ) );
        this.enemy[2].setPosition( new cc.Point( 275, 475 ) );
        this.enemy[3].setPosition( new cc.Point( 425, 475 ) );
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
