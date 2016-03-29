var Block1 = cc.Sprite.extend({
  	ctor: function() {
        this._super();
        this.initWithFile( res.block1_png );
        this.size = 50;
    }
});
