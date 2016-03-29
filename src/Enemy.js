var Enemy1 = cc. Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.enemy1_png );
        this.speedX = 0;
        this.speedY = 0;
    }
});
