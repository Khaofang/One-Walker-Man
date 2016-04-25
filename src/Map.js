var blockMap = [  [   ['B','B','B','B','B','B','B','B','B','B','B','B'],
                      ['B','S',' ','B',' ',' ',' ',' ','L',' ',' ','B'],
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
                      ['B',' ',' ',' ',' ',' ',' ',' ',' ','B','S','B'],
                      ['B','B','B','B','B','B','B','B','B','B','B','B']   ],
                  [   ['B','B','B','B','B','B','B','B','B','B','B','B'],
                      ['B',' ','H',' ',' ',' ','H',' ',' ',' ',' ','B'],
                      ['B',' ',' ',' ','H',' ',' ',' ','H',' ','S','B'],
                      ['B','K','B','B','B','B','B','B','B','B','B','B'],
                      ['B','W','W','W','W','W','W','W','W','W','W','B'],
                      ['B','W','W','W','W','W','W','W','W','W','W','B'],
                      ['B','B','B','B','B','B','B','B','B','B','L','B'],
                      ['F',' ','B',' ',' ','T',' ',' ','B',' ',' ','B'],
                      ['B','T','B','T','T','B','T','T','B','T','T','B'],
                      ['B',' ','B',' ',' ','B',' ',' ','B',' ',' ','B'],
                      ['B','T',' ','T','T','B','T','T',' ','T','T','B'],
                      ['B','B','B','B','B','B','B','B','B','B','B','B']    ]   ];

var pointMap = [  [   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ','',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ','B',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','B',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','S',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','G',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','D',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],   ],
                  [   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],   ],
                  [   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                      [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],   ]    ]; // มีพ้อยท์ ทองแดง เงิน ทอง เพชร ++

var Map = [];

Map[0] = cc.Node.extend({
    ctor: function() {
        this._super();
        this.MAP_SIZE = 12;
        this.currentMap = 1;
        this.blockMap = blockMap[this.currentMap-1];
        this.key = [];
        this.lock = [];
        this.finishPoint = [];
        this.hole = [];
        this.trap = [];
        this.enemy = [];
        this.point = [];
        this.setPosition( new cc.Point( 0, 0 ) );
    },
    createLockWay: function() {
        this.lock[0] = new cc.Sprite.create( res.lockdoor_png );
        this.addChild( this.lock[0] );
        this.lock[0].setPosition( new cc.Point( 425, 75 ) );
    },
    createEnemy: function() {
        for( var i = 0 ; i < 4 ; i++ ) {
            this.enemy[i] = new Enemy[0]( 1 );
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
    }
});

Map[1] = cc.Node.extend({
    ctor: function() {
      this._super();
      this.MAP_SIZE = 12;
      this.currentMap = 2;
      this.blockMap = blockMap[this.currentMap-1];
      this.key = [];
      this.lock = [];
      this.finishPoint = [];
      this.hole = [];
      this.trap = [];
      this.enemy = [];
      this.point = [];
      this.setPosition( new cc.Point( 0, 0 ) );
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
    createEnemy: function() {
        for( var i = 0 ; i < 4 ; i++ ) {
            this.enemy[i] = new Enemy[0]( 2 );
            this.addChild( this.enemy[i] );
        }
        this.enemy[0].setPosition( new cc.Point( 275, 175 ) );
        this.enemy[0].speedX = 1.25;
        this.enemy[1].setPosition( new cc.Point( 475, 175 ) );
        this.enemy[1].speedX = -1.25;
        this.enemy[2].setPosition( new cc.Point( 325, 275 ) );
        this.enemy[2].speedX = -1.25;
        this.enemy[3].setPosition( new cc.Point( 375, 325 ) );
        this.enemy[3].speedX = 1.25;
    }
});

Map[2] = cc.Node.extend({
    ctor: function() {
        this._super();
        this.MAP_SIZE = 12;
        this.currentMap = 3;
        this.blockMap = blockMap[this.currentMap-1];
        this.key = [];
        this.lock = [];
        this.finishPoint = [];
        this.hole = [];
        this.trap = [];
        this.enemy = [];
        this.point = [];
        this.setPosition( new cc.Point( 0, 0 ) );
    },
    createLockWay: function() {
        this.lock[0] = new cc.Sprite.create( res.lockdoor_png );
        this.addChild( this.lock[0] );
        this.lock[0].setPosition( new cc.Point( 525, 325 ) );
    }
});
