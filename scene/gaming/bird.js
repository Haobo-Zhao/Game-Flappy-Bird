class Bird extends Animation {
    constructor(game) {
        super(game, 'yellowbird')
        this.vy = 0
        this.ay = 0.5
    }

    static new(game) {
        return new this(game)
    }

    update() {
        super.update()
        this.y += this.vy
        this.vy += this.ay
        // 限制 y方向的速度
        if (this.y + this.h > 700) {
            // 最后那个 2 是微调的效果
            // magic, don't touch
            this.y = 700 - this.h + 2
        }
    }

    jump() {
        this.vy = -10
    }
}