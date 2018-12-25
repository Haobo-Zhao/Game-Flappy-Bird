// 启动游戏
var __main = function () {
    var images = {
        ground: 'img/sprite/ground.png'
    }

    var game = Game.instance(images, (g) => {
        // var scene = Scene_gaming.new(g)
        var scene = Scene_title.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
