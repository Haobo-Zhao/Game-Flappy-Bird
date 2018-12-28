class Galaxy extends JoeImage {
    constructor(game) {
        var type = randomBetween(1, 2)
        super(game, 'galaxy' + type)
        this.setup()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    setup() {
        var type = randomBetween(1, 2)
        this.texture = this.game.imageByName('galaxy' + type)
        this.w = this.texture.width
        this.h = this.texture.height
        this.x = randomBetween(600, 700)
        this.y = randomBetween(-100, 400)
        this.speed = randomBetween(1, 2)
    }

    update() {
        this.x -= this.speed
        if (this.x + this.w < 0) {
            this.setup()
        }
    }

    debug() {
        this.speed = config.galaxy_speed
    }
}
