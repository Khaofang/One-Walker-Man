var res = {
    block1_png :          "res/images/block1.png",
    coin_bronze_png :     "res/images/coin-bronze.png",
    coin_diamond_png :    "res/images/coin-diamond.png",
    coin_gold_png :       "res/images/coin-gold.png",
    coin_silver_png :     "res/images/coin-silver.png",
    enemy1_png :          "res/images/enemy1.png",
    finish_png :          "res/images/finish.png",
    gameover_scene_png:   "res/images/gameover-scene.png",
    hole_png :            "res/images/hole.png",
    key_png :             "res/images/key.png",
    lockdoor_png :        "res/images/lockdoor.png",
    player_down_png :     "res/images/player-down.png",
    player_left_png :     "res/images/player-left.png",
    player_right_png :    "res/images/player-right.png",
    player_up_png :       "res/images/player-up.png",
    trap_off_png :        "res/images/trap-off.png",
    trap_on_png :         "res/images/trap-on.png",
    water_png :           "res/images/water.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
