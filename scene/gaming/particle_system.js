class ParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup(x, y) {
        this.duration = 60
        this.x = x || 100
        this.y = y || 100
        this.numberOfParticles = 60
        this.particles = []
    }

    update() {
        this.duration--
        // 一旦 remove 之后，粒子系统就不在 scene 的 elements 数组里面了，
        // 所以 粒子系统 的 update 和 draw 就不会再被调用了
        if (this.duration <= 0) {
            this.scene.removeElement(this)
            return
        }

        // 更新一次，也就是每一帧，加一个火花进来
        var l = this.particles.length
        var n = this.numberOfParticles
        if (l < n) {
            var p = Particle.new(this.game)
            var vx = randomBetween(-1, 1)
            var vy = randomBetween(-1, 1)
            // 也可以走一个圆周
            // sin 和 cos 里面的单位都是弧度，所以用 pi
            // var pi = Math.PI
            // var vx = randomBetween(-6, 6) * Math.cos(l * (2 * pi / n))
            // var vy = randomBetween(-6, 6) * Math.sin(l * (2 * pi / n))
            p.setup(this.x, this.y, vx, vy)
            this.particles.push(p)
        }

        // 更新每一个火花的状态
        for (let p of this.particles) {
            p.update()
        }

        // 删掉已经没有生命值的火花，只保留还在存活的火花，
        // 这样，结合上面的 l < n 的判断语句，就可以源源不断地产生新的火花
        this.particles = this.particles.filter((p) => {return p.health > 0})
    }


    draw() {
        // 没有生命值之后，不画
        if (this.duration <= 0) {
            return
        }

        // 把每个火花画出来
        for (let p of this.particles) {
            p.draw()
        }
    }
}