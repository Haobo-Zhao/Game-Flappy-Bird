class Game {
    constructor(resources, callback) {
        // this.resources = {
        //     sky: 'img/sky.jpg',
        //     player: 'img/player.png',
        //     bullet: 'img/bullet.png',
        // }
        this.resources = resources

        // this.callback = (g) => {
        //     var scene = Scene_title.new(g)
        //     g.runWithScene(scene)
        // }
        // 这个 callback 会在 load 函数被调用之后，图片都加载好之后，被调用
        this.callback = callback

        window.paused = false

        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // bitmap， 如果用 css 来 设置 width 和 height 的话，是node的元素，不是 bitmap 的值，会出问题
        this.canvas.width = 600
        this.canvas.height = 700

        this.keys = {}
        this.actions = {}

        // 先把 scene 定义出来，然后在 scene 传进来的时候，用 this.setScene 绑定上
        this.scene = {}

        this.init()

        // 不绑定的话，
        // 在第二次运行 updateAndDraw 的时候，updateAndDraw 函数里面的 this 就指向 window 了，会报错
        this.updateAndDraw = this.updateAndDraw.bind(this)
    }

    // 单例模式
    // static new(resources, callback) {
    // 用一下 rest 和 expand 运算符，算是锻炼一下高级的 JS 编程技巧
    static instance(...args) {
        this.i = this.i || (new this(...args))
        return this.i
    }

    init() {
        // 有方向键被按下
        window.addEventListener('keydown', (event) => {
            this.keys[event.key] = 'down'
        })

        // 方向键松开
        window.addEventListener('keyup', (event) => {
            this.keys[event.key] = 'up'
        })
    }

    run() {
        this.load()
    }

    // 加载图片的函数
    // 整个程序在所有图片加载完成之后，才开始跑
    load() {
        var namesOfResources = Object.keys(this.resources)
        var loaded = 0;
        this.images = {}
        for (var i = 0; i < namesOfResources.length; i++) {
            // 这里没用 let 也做好了
            var name = namesOfResources[i]
            this.images[name] = imageFromPath(this.resources[name])
            this.images[name].onload = () => {
                loaded++
                if (loaded === namesOfResources.length) {
                    this.callback(this)
                }
            }
        }
    }

    imageByName(name) {
        return this.images[name]
    }

    drawImage(element) {
        // element 是一个 JoeImage
        this.context.drawImage(element.texture, element.x, element.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }


    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    showScore() {
        this.context.font = '20px consolas'
        this.context.fillText('Score: ' + score, 10, 290)
    }

    updateAndDraw() {
        // 执行当前事件数组 actions 里面，被按下键对应的事件
        // 注意，是从 actions 里面取，而不是从 keys 里面取，
        // 因为只关心有哪些键可以有动作
        for (var key in this.actions) {
            var keyStatus = this.keys[key]
            if (keyStatus === 'down') {
                this.actions[key]('down')
            } else if (keyStatus === 'up') {
                // 消掉这个松开按键的状态，不然的话，会一直执行松开按键触发的函数
                this.keys[key] = null
                
                this.actions[key]('up')
            }
        }

        // update
        this.update && this.update()

        // 清空画布
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // draw
        this.update && this.draw()

        // 在构造函数里面，已经把 this.updateAndDraw 绑定到对象本身来了
        window.setTimeout(this.updateAndDraw, 1000 / this.scene.fps)
    }

    // 从一个场景开始跑整个程序
    runWithScene(scene) {
        this.setScene(scene)
        this.updateAndDraw()
    }

    setScene(scene) {
        this.scene = scene
    }
}
