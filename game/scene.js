// 相当于每一个具体场景的父类，面向对象，为了复用的目的
class Scene {
    constructor(game) {
        this.game = game
        // 默认 fps
        this.fps = 60
        this.elements = []
        // 默认不允许 debug 模式
        this.debugModeEnabled = false
    }

    // 单例
    // 场景不需要一而再，再而三地去创造，不需要重复注册那些事件
    // 只需要去刷新场景里面的状态就可以了
    static new(game) {
        this.instance = this.instance || new this(game)
        return this.instance
    }

    addElement(e) {
        // e 是一个 JoeImage
        // 让 e 能够访问到所在的 scene
        e.scene = this
        this.elements.push(e)
    }

    removeElement(e) {
        var i = this.elements.indexOf(e)
        this.elements.splice(i, 1)
    }

    update() {
        // 如果允许 debug 模式
        if (config.debug) {
            for (let i = 0; i < this.elements.length; i++) {
                let e = this.elements[i]
                // 有 debug 这个函数才跑才跑
                e.debug && e.debug()
            }
        }

        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            // 这里又多用了一层抽象，调用元素自己的 draw 函数，
            // 至于每一个元素的 draw 函数的具体是怎么实现的，不关心啦！
            // this.game.drawImage(e)
            e.draw()
        }
    }

    enableDebugMode() {
        this.debugModeEnabled = false
    }
}