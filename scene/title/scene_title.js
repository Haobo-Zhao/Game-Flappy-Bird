class Scene_title extends Scene {
    constructor(game) {
        super(game)
        let ground = Ground.new(game)
        this.addElement(ground)

        let bird = Bird.new(game)
        this.addElement(bird)
    }
}
