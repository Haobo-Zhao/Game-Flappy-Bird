class Scene_title extends Scene {
    constructor(game) {
        super(game)
        var ground = Ground.new(game)
        this.addElement(ground)
    }
}
