class Bird extends Animation {
    constructor(game) {
        super(game, 'yellowbird')
        this.vy = 0
        this.ay = 0.5
        this.rotation = 0
    }

    static new(game) {
        return new this(game)
    }

    update() {
        super.update()
        // 重力加速度
        this.y += this.vy
        this.vy += this.ay
        if (this.y + this.h > 600) {
            // 最后那个 2 是微调的效果
            // magic, don't touch
            this.y = 600 - this.h + 2
        }

        // 旋转
        this.rotation += 2.5
        if (this.rotation > 45) {
            this.rotation = 45
        }
    }

    jump() {
        this.vy = -10
        // 旋转的角度
        this.rotation = -45
    }
}