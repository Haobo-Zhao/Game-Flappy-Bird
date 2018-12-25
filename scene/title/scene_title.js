class Scene_title extends Scene {
    constructor(game) {
        super(game)
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
        window.addEventListener('keydown', function(event){
            if (event.key === ' ') {
                self.bird.jump()
            }
        })
    }
}
