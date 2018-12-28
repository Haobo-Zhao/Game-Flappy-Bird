class Comet extends JoeImage {
    constructor(game) {
        super(game, 'comet' + randomBetween(1, 2))
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.flipX = randomBetween(1, 100) > 50 ? true : false
        this.directionX = this.flipX ? -1 : 1
        this.x = this.directionX === -1 ? this.game.canvas.width : (-this.w)
        this.speedX = randomBetween(2, 8) * this.directionX
        
        this.y = randomBetween(-this.h,-this.h)
        this.speedY = Math.abs(this.speedX)
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        if ((this.x > this.game.canvas.width || this.x + this.w < 0) && (this.y > this.game.canvas.height || this.y + this.h < 0)) {
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