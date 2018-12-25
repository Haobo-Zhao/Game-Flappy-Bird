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
        if (this.flipX) {
            this.drawLeftwards()
        } else {
            this.game.drawImage(this)
        }
    }

    drawLeftwards() {
        var context = this.game.context
        context.save()
        context.translate(this.x + this.w + this.x, 0)
        context.scale(-1, 1)
        this.game.drawImage(this)
        context.restore()
    }

    getFrame() {
        return this.textures[this.textureIndex]
    }
}