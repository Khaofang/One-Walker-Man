var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        this.layer = new GameLayer();
        this.layer.init();
        this.addChild( this.layer );
    }
});

var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.map = new Map[0]();
        this.currentMap = 1;
        this.createMap( this.currentMap );
        this.endThisMap = false;
        this.addChild( this.map );

        this.player = new Player();
        this.player.setPosition( new cc.Point( 75, 75 ) );
        this.addChild( this.player );
        this.player.addKeyboardHandlers();
        this.player.scheduleUpdate();

        this.scheduleUpdate();
    },

    update: function( dt ) {
        if ( !this.endThisMap ) {
            this.collectKey();
            this.colliseEnemy();
            this.fallToHole();
            this.reachFinishPoint();
        }
    },

    createMap: function( currentMap ) {
        for ( var row = 0 ; row < this.map.MAP_SIZE ; row++ ) {
            for ( var column = 0 ; column < this.map.MAP_SIZE ; column++ ) {
                blockMap[currentMap-1][row][column].toUpperCase();
                if ( blockMap[currentMap-1][row][column] == 'B' )
                    this.createBlock( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'F' )
                    this.map.createFinishPoint( row, column );
                else if ( blockMap[currentMap-1][row][column] == 'H' )
                    this.map.createHole( row, column );
                else if ( blockMap[currentMap-1][row][column] == 'K' )
                    this.map.createKey( row, column );
            }
        }
        this.map.createLockWay();
    },
    createBlock: function( currentMap, row, column ) {
        var block = new Block1();
        block.setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( block );
    },
    createKey: function( currentMap, row, column ) {
        this.map.key[this.map.numOfKey] = new cc.Sprite.create( res.key_png );
        this.map.key[this.map.numOfKey].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.key[this.map.numOfKey] );
        this.map.numOfKey++;
    },
    createFinishPoint: function( currentMap, row, column ) {
        this.map.finishPoint[this.map.numOfFinishPoint] = new cc.Sprite.create( res.finish_png );
        this.map.finishPoint[this.map.numOfFinishPoint].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.finishPoint[this.map.numOfFinishPoint] );
        this.map.numOfFinishPoint++;
    },
    createHole: function( currentMap, row, column ) {
        this.map.hole[this.map.numOfHole] = new cc.Sprite.create( res.hole_png );
        this.map.hole[this.map.numOfHole].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.hole[this.map.numOfHole] );
        this.map.numOfHole++;
    },






    collectKey: function() {
        for ( var i = 0 ; i < this.map.numOfKey ; i++ ) {
            var columnOfKey = (this.map.key[i].getPosition().x-25)/50;
            var rowOfKey = (this.map.key[i].getPosition().y-25)/50;
            if ( blockMap[this.currentMap-1][rowOfKey][columnOfKey] == 'K' ) {
                if ( Math.abs( this.player.getPosition().x-this.map.key[i].getPosition().x ) <= 20
                    && Math.abs( this.player.getPosition().y-this.map.key[i].getPosition().y ) <= 20 ) {
                    var columnOfLock = (this.map.lock[i].getPosition().x-25)/50;
                    var rowOfLock = (this.map.lock[i].getPosition().y-25)/50;
                    blockMap[this.currentMap-1][rowOfKey][columnOfKey] = 'k';
                    blockMap[this.currentMap-1][rowOfLock][columnOfLock] = 'l';
                    this.map.removeChild( this.map.key[i] );
                    this.map.removeChild( this.map.lock[i] );
                }
            }
        }
    },
    reachFinishPoint: function() {
        for ( var i = 0 ; i < this.map.finishPoint.length && !this.endThisMap ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.finishPoint[i].getPosition().x ) <= 25
              && Math.abs( this.player.getPosition().y-this.map.finishPoint[i].getPosition().y ) <= 25 ) {
                console.log( 'COMPLETE STAGE ' + this.currentMap.toString() );
                this.endThisMap = true;
            }
        }
        if ( this.endThisMap ) {
            this.currentMap++;
            if ( Map.length >= this.currentMap ) {
                this.removeChild( this.map );
                this.map = new Map[this.currentMap-1]();
                this.addChild( this.map );
                this.player.currentMap++;
                this.createMap( this.currentMap );
                this.endThisMap = false;
                this.player.setPosition( new cc.Point( 575, 525 ) );
                this.removeChild( this.player );
                this.addChild( this.player );
                this.player.addKeyboardHandlers();
                this.player.scheduleUpdate();
            }
            else {
                console.log( 'GAME END, YOU WIN .... I HATE YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU !!!' );
            }
        }
    },
    colliseEnemy: function() {
        for ( var i = 0 ; i < this.map.enemy.length ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.enemy[i].getPosition().x ) < 50
              && Math.abs( this.player.getPosition().y-this.map.enemy[i].getPosition().y ) < 50 ) {
                console.log( 'YOU DIE !!' );
            }
        }
    },
    fallToHole: function() {
        for ( var i = 0 ; i < this.map.hole.length ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.hole[i].getPosition().x ) <= 25
              && Math.abs( this.player.getPosition().y-this.map.hole[i].getPosition().y ) <= 25 ) {
                console.log( 'YOU DIE !!' );
            }
        }
    }




});
