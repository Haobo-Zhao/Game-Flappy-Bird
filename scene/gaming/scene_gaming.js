class Scene_gaming extends Scene {
    constructor(game) {
        // 存下 game
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        // 控制是不是允许 debug 模式来调试
        this.enableDebugMode()

        this.sky = Sky.new(this.game)
        this.galaxy = Galaxy.new(this.game)
        this.comet = Comet.new(this.game)
        this.player = new Player(this.game)

        // 背景图总是优先放，不然会覆盖其他的图
        this.addElement(this.sky)

        // 星系
        this.addElement(this.galaxy)

        // 彗星
        this.addElement(this.comet)

        // 敌机
        this.numberOfEnemies = 10
        this.addEnemies()

        this.addElement(this.player)
    }

    update() {
        if (window.paused) {
            return
        }
        super.update()
    }

    addEnemies() {
        this.enemies = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            this.enemies.push(e)
            this.elements.push(e)
        }
    }

    setupInputs() {
        // 这里也有 this 会指向 window 的陷阱
        var s = this
        this.game.registerAction('w', function () {
            s.player.moveUp()
        })
        this.game.registerAction('s', function () {
            s.player.moveDown()
        })
        this.game.registerAction('a', function () {
            s.player.moveLeft()
        })
        this.game.registerAction('d', function () {
            s.player.moveRight()
        })
        this.game.registerAction(' ', function () {
            s.player.fire()
        })

        window.addEventListener('keydown', function (event) {
            if (s.debugModeEnabled && event.key === 'Enter') {
                window.paused = !window.paused
            }
        })
    }
}

