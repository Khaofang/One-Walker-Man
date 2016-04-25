var Trap = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.trap_off_png );
        this.trapWork = false;
        this.timeWorking = 0;
    },
    update: function( dt ){
        this.timeWorking++;
        if ( this.timeWorking >= 240 ) {
            this.trapWork = false;
            this.initWithFile( res.trap_off_png );
            this.timeWorking = 0;
        }
        else if ( this.timeWorking >= 120 ) {
            this.trapWork = true;
            this.initWithFile( res.trap_on_png );
        }
    }
});
