class Bird extends Animation {
    constructor(game) {
        super(game, 'yellowbird')
    }

    static new(game) {
        return new this(game)
    }
}