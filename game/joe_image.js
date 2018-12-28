class JoeImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.imageByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.flipX = false
        this.flipY = false
        this.rotation = 0
    }

    static new(game, name) {
        var i = new this(game, name)
        return i
    }

    // 控制行为
    update() {

    }

    // 展示层 presentation layer
    draw() {
        let c = this.game.context

        c.save()

        // 先把坐标移动到整个图片的中心点
        let centerX = this.x + this.w / 2
        let centerY = this.y + this.h / 2
        c.translate(centerX, centerY)

        // 翻转相关的东西
        let scaleX = this.flipX ? -1 : 1
        let scaleY = this.flipY ? -1 : 1
        c.scale(scaleX, scaleY)
        // 下面这一行特别妙，不管怎么翻，一定能够把坐标原点移动到合适的位置
        c.translate(-this.w / 2, -this.h / 2)

        // 先翻转，再转角度
        // 角度换算弧度
        c.rotate(this.rotation * Math.PI / 180)

        // 最后是在最后坐标系的原点画这个东西
        c.drawImage(this.texture, 0, 0)

        c.restore()
    }

    // 在 debug mode 的时候才激活，让它可以用
    debug() {

    }
}
