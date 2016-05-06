var FrontPageScene = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.setPosition( new cc.Point( 400, 300 ) );
        this.initWithFile( res.frontpage_scene_png );
        this.showing = true;
    },

});

var pageFront = new FrontPageScene();
