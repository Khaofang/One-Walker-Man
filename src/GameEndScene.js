var GameEndScene = cc.Sprite.extend({
    ctor: function( isCompleteGame ){
        this._super();
        this.setPosition( 400, 300 );
        this.initWithFile( res.gameover_scene_png );
        /*if ( causeOfEnd == "Game Over. Enemy kills you !!" ){
            this.initWithFile();
        }
        else if ( causeOfEnd == "Game Over. You fall to the hole!!" ){
            this.initWithFile();
        }
        else if ( causeOfEnd == "Game Over. You stay in water too long!!" ){
            this.initWithFile();
        }
        else
            this.initWithFile();

        */
    }
});
