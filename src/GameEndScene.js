var GameEndScene = cc.Sprite.extend({
    ctor: function( isCompleteGame ){
        this._super();
        this.setPosition( 400, 300 );
        if ( !isCompleteGame )
            this.initWithFile( res.gameover_scene_png );
        else
            this.initWithFile( res.gamewin_scene_png );
    }
});

var pageGameOver = new GameEndScene( false );
var pageGameWin = new GameEndScene( true );
