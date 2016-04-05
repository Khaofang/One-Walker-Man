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
        this.addChild( this.map );

        this.player = new Player();
        this.player.setPosition( new cc.Point( 75, 75 ) );
        this.addChild( this.player );

        this.scheduleUpdate();
    },

    update: function( dt ) {
        this.reachFinishPoint();
        this.collectKey();
        this.colliseEnemy();
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
        for ( var i = 0 ; i < this.map.finishPoint.length ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.finishPoint[i].getPosition().x ) <= 25
              && Math.abs( this.player.getPosition().y-this.map.finishPoint[i].getPosition().y ) <= 25 ) {
                console.log( 'COMPLETE STAGE ' + this.currentMap.toString() );
            }
        }
    },
    colliseEnemy: function() {
        for ( var i = 0 ; i < this.map.enemy.length ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.enemy[i].getPosition().x ) < 50
              && Math.abs( this.player.getPosition().y-this.map.enemy[i].getPosition().y ) < 50 ) {
                console.log( 'YOU DIE!!' );
            }
        }
    }




});
