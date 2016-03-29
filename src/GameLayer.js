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
        this.player.scheduleUpdate();

        this.scheduleUpdate();
    },



});
