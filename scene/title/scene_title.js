class Scene_title extends Scene {
    constructor(game) {
        super(game)

        let pipe1 = Pipe.new(game)
        this.addElement(pipe1)
        
        let pipe2 = Pipe.new(game)
        pipe2.x = 900
        pipe2.y = 500
        this.addElement(pipe2)
        log(pipe2)

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
