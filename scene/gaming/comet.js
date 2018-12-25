class Comet extends JoeImage {
    constructor(game) {
        super(game, 'comet' + randomBetween(1, 2))
        this.setup()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    setup() {
        this.x = - randomBetween(800, 1300)
        this.y = - randomBetween(500, 1300)
        this.speed = 3
    }

    update() {
        this.x += this.speed
        this.y += this.speed
        if (this.x > this.game.canvas.width && this.y > this.game.canvas.height) {
            this.texture = this.game.imageByName('comet' + randomBetween(1, 2))
            this.w = this.texture.width
            this.h = this.texture.height
            this.setup()
        }
    }

    debug() {
        this.speed = config.comet_speed
    }
}