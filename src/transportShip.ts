const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Ship{
    frameX : number = 0
    frameY : number = 0
    fps : number = 5
    frameInterval : number = 100000/this.fps
    frameTimer : number = 0
    x : number
    y : number
    speedX : number
    speedY : number
    maxFrame : number = 1
    width : number = 114
    height : number = 83
    markedForDeletion : boolean = false
    constructor(x:number, y:number, speedX:number, speedY:number){
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
    }

    updateShip(deltaTime : number){
        this.x -= this.speedX
        this.y += this.speedY
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }
        this.drawShip()

        if(this.x + this.width < 0) this.markedForDeletion = true

    }
    drawShip(){
        let image : CanvasImageSource = new Image()
        image.src = './pics/newWepon.png'
        ctx!.drawImage(image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width/1.52, this.height/1.52)
    }


}