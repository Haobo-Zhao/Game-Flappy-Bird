class Animation {
    constructor(game, name) {
        this.game = game
        // this.textures 里面装的是一个 HTMLImageElement，就是可以直接画出来的东西
        this.textures = []
        for (let i = 0; i <= 9; i++) {
            let animationName = name + i
            let texture = game.imageByName(animationName)
            // 没有这张图片，说明到头了
            if (!texture) {
                // 这里如果用 return，就直接返回函数了，后面的 init 就没有办法执行到了
                break
            }
            this.textures.push(texture)
        }
        this.init()
    }

    static new(game, name) {
        return new this(game, name)
    }

    init() {
        this.cooldown = 3
        this.textureIndex = 0
        this.texture = this.textures[0]
        this.x = 200
        this.y = 200
        this.w = this.texture.width
        this.h = this.texture.height
        this.flipX = false
    }

    moveX(dx) {
        this.x += dx
    }

    moveY(dy) {
        this.y += dy
    }

    update() {
        this.cooldown--
        if (this.cooldown === 0) {
            this.cooldown = 3
            this.textureIndex = (this.textureIndex + 1) % this.textures.length
            this.texture = this.getFrame()
        }
    }

    draw() {
        var context = this.game.context

        context.save()

        // 这一段闪转腾挪特别精彩，值得细细去品味
        let w2 = this.w / 2
        let h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        // 动画实例里面，有 rotation 这个属性才做这个旋转坐标系的操作
        this.rotation && context.rotate(this.rotation * Math.PI / 180)
        // 这里不管 x 轴翻转没翻转，都能够得到合适的结果
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    getFrame() {
        return this.textures[this.textureIndex]
    }
}