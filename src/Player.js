var Player = cc.Sprite.extend({
  	ctor: function() {
        this._super();
        this.initWithFile( res.player_right_png );
        this.currentMap = 1;
        this.direction = Player.RIGHT;
        this.keyFromKeyboard = 0;
        this.moving = false;

        this.addKeyboardHandlers();
    },
    update: function( dt ) {
        if ( this.moving == true ) {
            this.move();
        }
    },

    move: function() {
        if ( this.keyFromKeyboard == 38 && this.checkCanMove( Player.DIR.UP ) ) {
            if( this.direction == Player.DIR.UP ) {
                this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y+5 ) );
            }
            else {
                this.direction = Player.DIR.UP;
                this.initWithFile( res.player_up_png );
                this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y+5 ) );
            }
        }
        else if ( this.keyFromKeyboard == 39 && this.checkCanMove( Player.DIR.RIGHT ) ) {
            if( this.direction == Player.DIR.RIGHT ) {
                this.setPosition( new cc.Point( this.getPosition().x+5, this.getPosition().y ) );
            }
            else {
                this.direction = Player.DIR.RIGHT;
                this.initWithFile( res.player_right_png );
                this.setPosition( new cc.Point( this.getPosition().x+5, this.getPosition().y ) );
            }
        }
        else if ( this.keyFromKeyboard == 40 && this.checkCanMove( Player.DIR.DOWN ) ) {
            if( this.direction == Player.DIR.DOWN ) {
                this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y-5 ) );
            }
            else {
                this.direction = Player.DIR.DOWN;
                this.initWithFile( res.player_down_png );
                this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y - 5 ) );
            }
        }
        else if ( this.keyFromKeyboard == 37 && this.checkCanMove( Player.DIR.LEFT ) ) {
            if( this.direction == Player.DIR.LEFT ) {
                this.setPosition( new cc.Point( this.getPosition().x-5, this.getPosition().y ) );
            }
            else {
                this.direction = Player.DIR.LEFT;
                this.initWithFile( res.player_left_png );
                this.setPosition( new cc.Point( this.getPosition().x-5, this.getPosition().y ) );
            }
        }
    },

    checkCanMove: function( direction ) {
        return true;
        /*if ( this.getPosition().x >= 75 && this.getPosition().y >= 75 && this.getPosition().x <= 525 && this.getPosition().y <= 525 ) {
            var column = Math.round((this.getPosition().x-25)/50);
            var row = Math.round((this.getPosition().y-25)/50);

            if ( direction == Player.DIR.DOWN && ( blockMap[this.currentMap-1][row-1][column] == 'B' || blockMap[this.currentMap-1][row-1][column] == 'L' ) ) {
                if ( (this.getPosition().y-50*(row-1)+25) <= 50 )
                    return false;
                else
                    return true;
            }
            else if ( direction == Player.DIR.UP && ( blockMap[this.currentMap-1][row+1][column] == 'B' || blockMap[this.currentMap-1][row+1][column] == 'L' ) ) {
                if ( (50*(row+1)+25-this.getPosition().y) <= 50 )
                    return false;
                else
                    return true;
            }
            else if ( direction == Player.DIR.LEFT && ( blockMap[this.currentMap-1][row][column-1] == 'B' || blockMap[this.currentMap-1][row][column-1] == 'L' ) ) {
                if ( (this.getPosition().x-50*(column-1)+25) <= 50 )
                    return false;
                else
                    return true;
            }
            else if ( direction == Player.DIR.RIGHT && ( blockMap[this.currentMap-1][row][column+1] == 'B' || blockMap[this.currentMap-1][row][column+1] == 'L' ) ) {
                if ( (50*(column+1)+25-this.getPosition().x) <= 50 )
                    return false;
                else
                    return true;
            }
            return true;
        }
        else
            return false;*/
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
                console.log( 'Key: ' + keyCode.toString() );
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
