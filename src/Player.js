var Player = cc.Sprite.extend({
  	ctor: function() {
        this._super();
        this.initWithFile( res.player_right_png );
        this.currentMap = 1;
        this.direction = Player.RIGHT;
        this.keyFromKeyboard = 0;
        this.moving = false;

        this.addKeyboardHandlers();
        this.scheduleUpdate();
    },
    update: function( dt ) {
        if ( this.moving == true )
            this.move();
    },

    move: function() {
        this.changePlayerFace( this.keyFromKeyboard );

        if ( ( this.keyFromKeyboard == 38 || this.keyFromKeyboard == 87 ) && this.isPossibleMove( Player.DIR.UP ) )
            this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y+5 ) );
        else if ( ( this.keyFromKeyboard == 39 || this.keyFromKeyboard == 68 ) && this.isPossibleMove( Player.DIR.RIGHT ) )
            this.setPosition( new cc.Point( this.getPosition().x+5, this.getPosition().y ) );
        else if ( ( this.keyFromKeyboard == 40 || this.keyFromKeyboard == 83 ) && this.isPossibleMove( Player.DIR.DOWN ) )
            this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y-5 ) );
        else if ( ( this.keyFromKeyboard == 37 || this.keyFromKeyboard == 65 ) && this.isPossibleMove( Player.DIR.LEFT ) ) {
            this.setPosition( new cc.Point( this.getPosition().x-5, this.getPosition().y ) );
        }
    },
    changePlayerFace: function( keyFromKeyboard ) {
        if ( keyFromKeyboard == 37 || keyFromKeyboard == 65 )
            this.initWithFile( res.player_left_png );
        else if ( keyFromKeyboard == 38 || keyFromKeyboard == 87 )
            this.initWithFile( res.player_up_png );
        else if ( keyFromKeyboard == 39 || keyFromKeyboard == 68 )
            this.initWithFile( res.player_right_png );
        else if ( keyFromKeyboard == 40 || keyFromKeyboard == 83 )
            this.initWithFile( res.player_down_png );
    },

    isPossibleMove: function( direction ) {
        var xPlayer = this.getPosition().x;
        var yPlayer = this.getPosition().y;
        var xBlock = ( Math.floor( ( this.getPosition().x )/50 ) ) * 50 + 25 + this.nextPositionX( direction );
        var yBlock = ( Math.floor( ( this.getPosition().y )/50 ) ) * 50 + 25 + this.nextPositionY( direction );
        return this.checkCaseMove1( direction, xPlayer, yPlayer, xBlock, yBlock ) && this.checkCaseMove2( direction, xPlayer, yPlayer, xBlock, yBlock );

        /*var xPlayer = this.getPosition().x;
        var yPlayer = this.getPosition().y;
        var xBlock = ( Math.floor( ( this.getPosition().x )/50 ) ) * 50 + 25;
        var yBlock = ( Math.floor( ( this.getPosition().y )/50 ) ) * 50 + 25;

        if ( direction == Player.DIR.UP )
            yBlock += 50;
        else if ( direction == Player.DIR.RIGHT )
            xBlock += 50;
        else if ( direction == Player.DIR.DOWN )
            yBlock -= 50;
        else if ( direction == Player.DIR.LEFT )
            xBlock -= 50;

        var blockColumn = (xBlock-25)/50;
        var blockRow = (yBlock-25)/50;

        var case1 = true;
        var case2 = true;

        if ( blockMap[this.currentMap-1][blockRow][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn] == 'L' ){
            var distance1 = Math.sqrt( (xPlayer-xBlock)*(xPlayer-xBlock)+(yPlayer-yBlock)*(yPlayer-yBlock) );
            var limitDistance1;
            if ( direction == Player.DIR.UP || direction == Player.DIR.DOWN )
                limitDistance1 = Math.sqrt( (xPlayer-xBlock)*(xPlayer-xBlock)+2500 );
            else
                limitDistance1 = Math.sqrt( (yPlayer-yBlock)*(yPlayer-yBlock)+2500 );
            if ( distance1 <= limitDistance1 )
                case1 = false;
        }

        if ( ( direction == Player.DIR.UP || direction == Player.DIR.DOWN ) && ( Math.abs( yPlayer-yBlock ) < 50 ) ) {
            if ( xPlayer < xBlock ) {
                if ( blockMap[this.currentMap-1][blockRow][blockColumn-1] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn-1] == 'L' )
                    case2 = false;
            } else if ( xPlayer > xBlock ) {
                if ( blockMap[this.currentMap-1][blockRow][blockColumn+1] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn+1] == 'L' )
                    case2 = false;
            }
        } else if ( ( direction == Player.DIR.RIGHT || direction == Player.DIR.LEFT ) && ( Math.abs( xPlayer-xBlock ) < 50 ) ) {
            if ( yPlayer < yBlock ) {
                if ( blockMap[this.currentMap-1][blockRow-1][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow-1][blockColumn] == 'L' )
                    case2 = false;
            } else if ( yPlayer > yBlock ) {
                if ( blockMap[this.currentMap-1][blockRow+1][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow+1][blockColumn] == 'L' )
                    case2 = false;
            }
        }
        return ( case1 && case2 );*/
    },
    nextPositionX: function( direction ) {
        if ( direction == Player.DIR.RIGHT )
            return 50;
        else if ( direction == Player.DIR.LEFT )
            return -50;
        else
            return 0;
    },
    nextPositionY: function( direction ) {
        if ( direction == Player.DIR.UP )
            return 50;
        else if ( direction == Player.DIR.DOWN )
            return -50;
        else
            return 0;
    },
    checkCaseMove1: function( direction, xPlayer, yPlayer, xBlock, yBlock ) {
        var blockColumn = (xBlock-25)/50;
        var blockRow = (yBlock-25)/50;
        if ( blockMap[this.currentMap-1][blockRow][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn] == 'L' ){
            var distance1 = Math.sqrt( (xPlayer-xBlock)*(xPlayer-xBlock)+(yPlayer-yBlock)*(yPlayer-yBlock) );
            var limitDistance1;
            if ( direction == Player.DIR.UP || direction == Player.DIR.DOWN )
                limitDistance1 = Math.sqrt( (xPlayer-xBlock)*(xPlayer-xBlock)+2500 );
            else
                limitDistance1 = Math.sqrt( (yPlayer-yBlock)*(yPlayer-yBlock)+2500 );
            if ( distance1 <= limitDistance1 )
                return false;
        }
        return true;
    },
    checkCaseMove2: function( direction, xPlayer, yPlayer, xBlock, yBlock ) {
        var blockColumn = (xBlock-25)/50;
        var blockRow = (yBlock-25)/50;
        if ( ( direction == Player.DIR.UP || direction == Player.DIR.DOWN ) && ( Math.abs( yPlayer-yBlock ) < 50 ) ) {
            return this.checkCaseMove2Y( direction, xPlayer, yPlayer, xBlock, yBlock, blockRow, blockColumn );
        } else if ( ( direction == Player.DIR.RIGHT || direction == Player.DIR.LEFT ) && ( Math.abs( xPlayer-xBlock ) < 50 ) ) {
            return this.checkCaseMove2X( direction, xPlayer, yPlayer, xBlock, yBlock, blockRow, blockColumn );
        }
        return true;
    },
    checkCaseMove2Y: function( direction, xPlayer, yPlayer, xBlock, yBlock, blockRow, blockColumn ) {
        if ( xPlayer < xBlock ) {
            if ( blockMap[this.currentMap-1][blockRow][blockColumn-1] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn-1] == 'L' )
                return false;
        } else if ( xPlayer > xBlock ) {
            if ( blockMap[this.currentMap-1][blockRow][blockColumn+1] == 'B' || blockMap[this.currentMap-1][blockRow][blockColumn+1] == 'L' )
                return false;
        }
        return true;
    },
    checkCaseMove2X: function( direction, xPlayer, yPlayer, xBlock, yBlock, blockRow, blockColumn ) {
        if ( yPlayer < yBlock ) {
            if ( blockMap[this.currentMap-1][blockRow-1][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow-1][blockColumn] == 'L' )
                return false;
        } else if ( yPlayer > yBlock ) {
            if ( blockMap[this.currentMap-1][blockRow+1][blockColumn] == 'B' || blockMap[this.currentMap-1][blockRow+1][blockColumn] == 'L' )
                return false;
        }
        return true;
    },

    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.moving = true;
                self.keyFromKeyboard = keyCode;
            },
            onKeyReleased: function( keyCode, event ) {
                self.moving = false;
                //console.log( 'Key: ' + keyCode.toString() );
            }
        }, this);
    }
});

Player.DIR = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4
};
