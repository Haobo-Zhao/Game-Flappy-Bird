class Ground {
    constructor(game) {
        this.game = game
        this.tiles = []
        for (let i = 0; i < 3; i++) {
            let tile = JoeImage.new(game, 'ground')
            tile.x = i * 336
            tile.y = 700
            this.tiles.push(tile)
        }
        this.movedDistance = 0
    }

    static new(game) {
        return new this(game)
    }

    // 左右左右走这样来回切换
    // 走完一块，返回一块
    update() {
        var step = -4
        if (this.movedDistance === 336) {
            step = 336
        }

        for(let t of this.tiles) {
            t.x += step
        }

        if (this.movedDistance === 336) {
            this.movedDistance = 0
        } else {
            this.movedDistance += 4
        }
    }

    draw() {
        for (let t of this.tiles) {
            this.game.drawImage(t)
        }
    }
}