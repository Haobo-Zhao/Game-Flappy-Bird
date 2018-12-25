class Galaxy extends JoeImage {
    constructor(game) {
        super(game, 'galaxy')
        this.setup()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    setup() {
        this.x = randomBetween(-200, 200)
        this.y = - randomBetween(700, 950)
        this.speed = 1
    }

    update() {
        this.y += this.speed
        if (this.y > this.game.canvas.height) {
            this.setup()
        }
    }

    debug() {
        this.speed = config.galaxy_speed
    }
}
