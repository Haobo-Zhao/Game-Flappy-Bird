class Pipe extends JoeImage {
    constructor(game) {
        super(game, 'pipe')
    }

    static new(game) {
        return new this(game)
    }

    draw() {
        let context = this.game.context
        context.save()
        if (this.flipY) {
            // this.y 一定是负的或者是 0
            // 即使 y 轴反转之后，还是希望能够根据 this.y 来画出图像，而这个时候， this.y 是原来的反方向了
            // 所以这里先多扣一点距离（ this.y 一定是负数或者是 0)
            context.translate(0, this.h + this.y + this.y)
            context.scale(1, -1)
        }
        this.game.drawImage(this)
        context.restore()
    }
}