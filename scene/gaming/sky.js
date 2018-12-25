class Sky extends JoeImage {
    constructor(game) {
        super(game, 'sky')
    }

    static new(game) {
        var i = new this(game)
        return i
    }
}