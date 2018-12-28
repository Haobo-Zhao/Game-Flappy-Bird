class Scene_title extends Scene {
    constructor(game) {
        super(game)
        
        let pipes = Pipes.new(game)
        this.addElement(pipes)

        let ground = Ground.new(game)
        this.ground = ground
        this.addElement(ground)

        let bird = Bird.new(game)
        this.bird = bird
        this.addElement(bird)

        this.setupInputs()
    }

    setupInputs() {
        let self = this
        // this.game.registerAction(' ', function(){
        //     self.bird.jump()
        // })

        this.game.registerAction('a', function () {
            self.bird.moveX(-5)
            self.bird.flipX = true
        })

        this.game.registerAction('d', function () {
            self.bird.moveX(5)
            self.bird.flipX = false
        })

        window.addEventListener('keydown', function (event) {
            if (event.key === ' ') {
                self.bird.jump()
            }
        })
    }
}
