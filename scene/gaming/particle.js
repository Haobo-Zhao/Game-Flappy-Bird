class Particle extends JoeImage {
    constructor(game) {
        super(game, 'particle')
        this.setup()
    }

    // 对那些不需要再传第二个参数的 JoeImage 类型， 需要覆盖父类的 静态 new 方法
    static new(game) {
        var i = new this(game)
        return i
    }

    setup(x, y, vx, vy, ax, ay) {
        this.x = x || 100
        this.y = y || 100

        this.vx = vx || randomBetween(-1, 1)
        this.vy = vy || randomBetween(-1, 1)

        this.ax = ax || -1
        this.ay = ay || -1

        this.health = 6
    }

    update() {
        this.health--
        this.x += this.vx
        this.y += this.vy
    }

    draw() {
        if (this.health <= 0) {
            return
        }
        this.game.drawImage(this)
    }
}