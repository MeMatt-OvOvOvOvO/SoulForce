const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Boom{
    speed : number
    spriteH : number = 109
    spriteW : number = 120
    sizeModifire : number = 0.8
    width : number = this.spriteW * this.sizeModifire
    height : number = this.spriteH * this.sizeModifire
    public x : number
    public y : number
    frameX : number = 0
    maxFrame : number = 6
    markedForDetection : boolean = false
    fps : number = 5
    frameInterval : number = 100000/this.fps
    frameTimer : number = 0

    constructor(x:number, y:number, speed:number){
        this.x = x - this.width * 0.5
        this.y = y - this.width * 0.5
        this.speed = speed
    }

    drawBoom(){
        let sound = new Audio()
        sound.src = './sound/boom.wav'
        sound.volume = 0.02
        if(this.frameX === 0) sound.play()
        let image : CanvasImageSource = new Image()
        image.src = './boom/booom.png'
        ctx!.drawImage(image, this.frameX * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width, this.height)
    }
    updateBoom(deltaTime : number){
        this.x -= this.speed
        if(this.frameTimer > this.frameInterval){
            this.frameX++
            this.frameTimer = 0
        }else{
            this.frameTimer += deltaTime
        }
        if(this.frameX > this.maxFrame) this.markedForDetection = true
    }
}