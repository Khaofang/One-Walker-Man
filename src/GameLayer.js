var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        this.layer = new GameLayer();
        this.layer.addMouseListener();
        this.layer.init();
        this.addChild( this.layer );
    }
});

var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.addChild( pageFront );
        this.addChild( pageGuide );
        pageGuide.setVisible( false );
    },

    update: function( dt ) {
        if ( !this.endThisGame ) {
            this.allTimeUsed++;
            if ( !this.endThisMap ) {
                this.colliseEnemy();
                this.fallToHole();
                this.trapHit();
                this.warningInWater();
                this.collectKey();
                this.collectPoint();
                this.reachFinishPoint();
            }
        }
        else {
            if ( this.player.keyFromKeyboard == 13 ) {
                this.restartGame();
            }
            else if ( this.player.keyFromKeyboard == 27 ) {
                this.removeChild( this.player );
                this.removeChild( this.map );
                this.removeChild( this.scoreLabel );
                this.removeChild( this.warningLabel );
                this.removeChild( this.extraScene );
                pageFront.setVisible( true );
                pageFront.showing = true;
            }
        }

    },

    gameStart: function( currentLevel ) {
        this.win = false;

        this.currentMap = currentLevel;
        this.map = new Map[this.currentMap-1]();
        this.createMap( this.currentMap );
        this.endThisGame = false;
        this.endThisMap = false;
        this.addChild( this.map );

        this.player = new Player( this.currentMap );
        this.setPlayerToNewMap();
        this.addChild( this.player );
        this.player.addKeyboardHandlers();
        this.player.scheduleUpdate();

        this.scoreLabel = cc.LabelTTF.create( 'SCORE\n0', 'Arial', 30 );
        this.scoreLabel.setString( 'SCORE\n' + this.player.score );
        this.scoreLabel.setPosition( new cc.Point( 700, 500 ) );
        this.addChild( this.scoreLabel );

        this.warningLabel = cc.LabelTTF.create( ' ', 'Arial', 30 );
        this.warningLabel.setPosition( new cc.Point( 700, 100 ) );
        this.addChild( this.warningLabel );

        this.extraScene = null;
        this.allTimeUsed = 0;
        this.timeToDie = 0;

        this.scheduleUpdate();
    },
    gameEnd: function( isCompleteGame ) {
        console.log( 'GAME END, SPACEBAR/ENTER TO CONTINUE.' );
        this.player.unscheduleUpdate();
        this.extraScene = new GameEndScene( isCompleteGame );
        this.addChild( this.extraScene );
    },
    restartGame: function() {
        this.removeChild( this.player );
        this.removeChild( this.map );
        this.removeChild( this.scoreLabel );
        this.removeChild( this.warningLabel );
        this.removeChild( this.extraScene );
        if ( !this.win )
            this.gameStart( this.currentMap );
        else
            this.gameStart( 1 );
    },

    createMap: function( currentMap ) {
        for ( var row = 0 ; row < this.map.MAP_SIZE ; row++ ) {
            for ( var column = 0 ; column < this.map.MAP_SIZE ; column++ ) {
                blockMap[currentMap-1][row][column] = blockMap[currentMap-1][row][column].toUpperCase();
                pointMap[currentMap-1][row][column] = pointMap[currentMap-1][row][column].toUpperCase();
                if ( blockMap[currentMap-1][row][column] == 'B' )
                    this.createBlock( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'F' )
                    this.createFinishPoint( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'H' )
                    this.createHole( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'K' )
                    this.createKey( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'T' )
                    this.createTrap( currentMap, row, column );
                else if ( blockMap[currentMap-1][row][column] == 'W' )
                    this.createWater( currentMap, row, column );
                if ( pointMap[currentMap-1][row][column] != ' ' )
                    this.createPoint( currentMap, row, column );
            }
        }
        this.map.createLockWay();
        this.map.createEnemy();
    },
    createNewMap: function() {
        this.removeChild( this.map );
        this.map = new Map[this.currentMap-1]();
        this.addChild( this.map );
        this.player.currentMap++;
        this.createMap( this.currentMap );
        this.endThisMap = false;
        this.setPlayerToNewMap();
        this.removeChild( this.player );
        this.addChild( this.player );
        this.player.addKeyboardHandlers();
        this.player.scheduleUpdate();
    },
    setPlayerToNewMap: function() {
        for ( var row = 0 ; row < this.map.MAP_SIZE ; row++ ) {
            for ( var column = 0 ; column < this.map.MAP_SIZE ; column++ ) {
                if( blockMap[this.currentMap-1][row][column] == 'S' )
                    this.player.setPosition( column*50+25, row*50+25 );
            }
        }
    },
    createBlock: function( currentMap, row, column ) {
        var block = new Block1();
        block.setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( block );
    },
    createFinishPoint: function( currentMap, row, column ) {
        var numOfFinishPoint = this.map.finishPoint.length;
        this.map.finishPoint[numOfFinishPoint] = new cc.Sprite.create( res.finish_png );
        this.map.finishPoint[numOfFinishPoint].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.finishPoint[numOfFinishPoint] );
    },
    createHole: function( currentMap, row, column ) {
        var numOfHole = this.map.hole.length;
        this.map.hole[numOfHole] = new cc.Sprite.create( res.hole_png );
        this.map.hole[numOfHole].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.hole[numOfHole] );
    },
    createKey: function( currentMap, row, column ) {
        var numOfKey = this.map.key.length;
        this.map.key[numOfKey] = new cc.Sprite.create( res.key_png );
        this.map.key[numOfKey].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.key[numOfKey] );
    },
    createPoint : function( currentMap, row, column ) {
        var numOfPoint = this.map.point.length;
        this.map.point[numOfPoint] = new Point( pointMap[currentMap-1][row][column] );
        this.map.point[numOfPoint].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.point[numOfPoint] );
    },
    createTrap: function( currentMap, row, column ) {
        var numOfTrap = this.map.trap.length;
        this.map.trap[numOfTrap] = new Trap();
        this.map.trap[numOfTrap].setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( this.map.trap[numOfTrap] );
        this.map.trap[numOfTrap].scheduleUpdate();
    },
    createWater: function( currentMap, row, column ) {
        var water = new cc.Sprite.create( res.water_png );
        water.setPosition( new cc.Point( column*50+25, row*50+25 ) );
        this.map.addChild( water );
    },

    collectKey: function() {
        for ( var i = 0 ; i < this.map.key.length ; i++ ) {
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
            if ( Map.length > this.currentMap ) {
                this.currentMap++;
                this.createNewMap();
            }
            else {
                console.log( 'GAME END, YOU WIN !!!' );
                this.endThisGame = true;
                this.win = true;
                this.gameEnd( true );
            }
        }
    },
    colliseEnemy: function() {
        for ( var i = 0 ; i < this.map.enemy.length ; i++ ) {
            if ( Math.sqrt( Math.pow( this.player.getPosition().x-this.map.enemy[i].getPosition().x,2 ) +
              Math.pow( this.player.getPosition().y-this.map.enemy[i].getPosition().y,2 ) ) < 50 ) {
                console.log( 'YOU DIE !!' );
                this.endThisGame = true;
                this.gameEnd( false );
            }
        }
    },
    fallToHole: function() {
        for ( var i = 0 ; i < this.map.hole.length ; i++ ) {
            if ( Math.abs( this.player.getPosition().x-this.map.hole[i].getPosition().x ) <= 25
              && Math.abs( this.player.getPosition().y-this.map.hole[i].getPosition().y ) <= 25 ) {
                console.log( 'YOU DIE !!' );
                this.endThisGame = true;
                this.gameEnd( false );
            }
        }
    },
    trapHit: function() {
        for ( var i = 0 ; i < this.map.trap.length ; i++ ) {
            if ( this.map.trap[i].trapWork
              && Math.abs( this.player.getPosition().x-this.map.trap[i].getPosition().x ) <= 40
              && Math.abs( this.player.getPosition().y-this.map.trap[i].getPosition().y ) <= 35 ) {
                console.log( 'YOU DIE !!' );
                this.endThisGame = true;
                this.gameEnd( false );
            }
        }
    },
    collectPoint: function() {
        for ( var i = 0 ; i < this.map.point.length ; i++ ) {
            var columnOfPoint = (this.map.point[i].getPosition().x-25)/50;
            var rowOfPoint = (this.map.point[i].getPosition().y-25)/50;
            if ( pointMap[this.currentMap-1][rowOfPoint][columnOfPoint] == 'B'
              || pointMap[this.currentMap-1][rowOfPoint][columnOfPoint] == 'S'
              || pointMap[this.currentMap-1][rowOfPoint][columnOfPoint] == 'G'
              || pointMap[this.currentMap-1][rowOfPoint][columnOfPoint] == 'D' ) {
                if ( Math.abs( this.player.getPosition().x-this.map.point[i].getPosition().x ) <= 20
                  && Math.abs( this.player.getPosition().y-this.map.point[i].getPosition().y ) <= 20 ) {
                    pointMap[this.currentMap-1][rowOfPoint][columnOfPoint] = pointMap[this.currentMap-1][rowOfPoint][columnOfPoint].toLowerCase();
                    this.map.removeChild( this.map.point[i] );
                    this.player.score += this.map.point[i].score;
                    cc.audioEngine.playEffect( res.pointcollect_mp3 );
                    console.log( 'YOUR CURRENT SCORE : ' + this.player.score );
                    this.scoreLabel.setString( 'SCORE\n' + this.player.score );
                }
            }
        }
    },
    inWater: function() {
        for ( var row = 0 ; row < this.map.MAP_SIZE ; row++ )  {
            for ( var column = 0 ; column < this.map.MAP_SIZE ; column++ ) {
                if ( blockMap[this.currentMap-1][row][column] == 'W'
                  && Math.abs( this.player.getPosition().x-(column*50+25) ) <= 25
                  && Math.abs( this.player.getPosition().y-(row*50+25) ) <= 25 ) {
                      return true;
                  }
            }
        }
        return false;
    },
    warningInWater: function() {
        if ( this.map instanceof Map[2] || this.map instanceof Map[4] ){
            if ( this.inWater() ) {
                this.timeToDie++;
                this.warningLabel.setString( 'WARNING\n' + ( 11-Math.ceil( this.timeToDie/60 ) ) );
                console.log( 'WARNING, YOU CAN BE IN HERE BY 10 SECONDS !!' );
                if ( this.timeToDie >= 600 ) {
                    console.log( 'YOU DIE !!' );
                    this.endThisGame = true;
                    this.gameEnd( false );
                }
            }
            else {
                this.timeToDie = 0;
                this.warningLabel.setString( ' ' );
            }
        }
    },

    addMouseListener: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function( event ) {
                if ( pageFront.showing && !pageGuide.showing && event.getButton() == cc.EventMouse.BUTTON_LEFT ) {
                    pageFront.showing = false;
                    pageFront.setVisible( false );
                    self.gameStart( 1 );
                    console.log('Game Start');
                }
                else if ( pageFront.showing && !pageGuide.showing && event.getButton() == cc.EventMouse.BUTTON_RIGHT ) {
                    self.changeToGuidePage();
                }
                else if ( pageFront.showing && pageGuide.showing && event.getButton() == cc.EventMouse.BUTTON_LEFT ) {
                    self.changeToFrontPage();
                }
                else {
                    console.log('-..-');
                }
            }
        }, this);
    },

    changeToGuidePage: function() {
        pageGuide.showing = true;
        console.log('Go to Guide Page');
        pageGuide.setVisible( true );
    },
    changeToFrontPage: function() {
        pageGuide.showing = false;
        pageGuide.setVisible( false );
        console.log('Back to Front Page');
    }
});
