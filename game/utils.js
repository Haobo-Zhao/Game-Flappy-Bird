const log = console.log.bind(console)

// shortcut
const e = function(selector) {
    return document.querySelector(selector)
}

// 多重影分身,es = elements
const es = selector => document.querySelectorAll(selector)

const bindAll = function(selector, eventType, callback) {
    var elements = es(selector)
    for (let e of elements) {
        // 后面用一个函数表达式，把 callback 包起来，这样更加灵活，想做什么操作都可以在里面做
        // 而不需要严格适配传进来的 callback
        e.addEventListener(eventType, function(event) {
            callback(event)
        })
    }
}

const imageFromPath = function(path) {
    var image = new Image()
    image.src = path
    return image
}

// 两边都是闭区间
const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    n = Math.floor(n) + start
    return n
}
