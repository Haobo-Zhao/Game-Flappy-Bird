class Pipe extends JoeImage {
    constructor(game) {
        super(game, 'pipe')
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    init() {
        this.x = 600
        this.y = 700 - this.h
        this.speed = -3
    }

    update() {
        this.x += this.speed
        if (this.x + this.w < 0) {
            this.x = 600
        }
    }
}