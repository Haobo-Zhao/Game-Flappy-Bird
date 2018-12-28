class Pipes {
    constructor(game) {
        this.game = game
        // pipes 里面的形式 [ [p1, p2], ] 
        this.pipes = []
        // 上下两根管子的间隔，小鸟飞过
        this.space = 200

        // 水平方向，两排管子之间的间隔
        this.gap = 300

        this.speed = 3

        for (var i = 0; i < 4; i++) {
            // p1 在上面
            let p1 = Pipe.new(game)
            p1.flipY = true
            p1.x = 600 + i * this.gap
            p1.y = randomBetween(-220, 0)

            let p2 = Pipe.new(game)
            p2.x = p1.x
            // 从上往下画，不用再减去管身的高度
            p2.y = p1.y + p1.h + this.space
            this.pipes.push([p1, p2])
        }
    }

    static new(game) {
        return new this(game)
    }

    update() {
        for (let pair of this.pipes) {
            let p1 = pair[0]
            let p2 = pair[1]
            p1.x -= this.speed
            p2.x = p1.x

            if (p1.x + p1.w < 0) {
                p1.x += 4 * this.gap
                p1.y = randomBetween(-220, 0)

                p2.x = p1.x
                p2.y = p1.y + p1.h + this.space
            }
        }
    }

    draw() {
        for (let pair of this.pipes) {
            pair[0].draw()
            pair[1].draw()
        }
    }
}