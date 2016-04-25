var Point = cc.Sprite.extend({
    ctor: function( type ) {
        this._super();
        this.score = 0;

        if ( type == "B" ) {
            this.score = 10;
            this.initWithFile( res.coin_bronze_png );
        }
        else if ( type == "S" ) {
            this.score = 20;
            this.initWithFile( res.coin_silver_png );
        }
        else if ( type == "G" ) {
            this.score = 50;
            this.initWithFile( res.coin_gold_png );
        }
        else if ( type == "D" ) {
            this.score = 100;
            this.initWithFile( res.coin_diamond_png );
        }
    },
});
