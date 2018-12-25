const log = console.log.bind(console)

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