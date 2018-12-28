// 启动游戏
var __main = function () {
    var images = {
        ground: 'img/sprite/ground.png',
        pipe: 'img/sprite/pipe/pipe-green.png',

        sky: 'img/sky.png',
        galaxy1: 'img/galaxy1.png',
        galaxy2: 'img/galaxy2.png',
        comet1: 'img/comet1.png',
        comet2: 'img/comet2.png',
        
        yellowbird0: 'img/sprite/bird/yellowbird0.png',
        yellowbird1: 'img/sprite/bird/yellowbird1.png',
        yellowbird2: 'img/sprite/bird/yellowbird2.png',
    }

    var game = Game.instance(images, (g) => {
        // var scene = Scene_gaming.new(g)
        var scene = Scene_title.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
