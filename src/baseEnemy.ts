const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Enemy{
    frameX : number = 0
    frameY : number = 0
    fps : number = 5
    frameInterval : number = 100000/this.fps
    frameTimer : number = 0
    x : number
    y : number
    speedX : number
    speedY : number
    maxFrame : number
    width : number
    height : number
    enem : number
    markedForDeletion : boolean = false
    constructor(x:number, y:number, speedX:number, speedY:number, maxFrame:number, width:number, height:number, enem:number){
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.maxFrame = maxFrame
        this.width = width
        this.height = height
        this.enem = enem
    }

    updateEnemy(deltaTime : number){
        this.x -= this.speedX
        this.y += this.speedY
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }
        this.drawEnemy()

        if(this.x + this.width < 0) this.markedForDeletion = true

    }
    drawEnemy(){
        let image : CanvasImageSource = new Image()
        image.src = './enemies/'+ this.enem +'.png'
        ctx!.drawImage(image, this.frameX * this.width, 0, this.width, this.height,
             this.x, this.y, this.width/1.52, this.height/1.52)
    }


}