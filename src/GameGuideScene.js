var GameGuideScene = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.setPosition( new cc.Point( 400, 300 ) );
        this.initWithFile( res.gameguide_scene_png );
        this.showing = false;
    }
});

var pageGuide = new GameGuideScene();
