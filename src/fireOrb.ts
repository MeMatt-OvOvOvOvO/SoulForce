const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Orb{
    x:number
    y:number
    xx:number
    yy:number
    spriteH : number = 63
    spriteW : number = 94
    sizeModifire : number = 0.7
    height:number = this.spriteH * this.sizeModifire
    width:number = this.spriteW * this.sizeModifire

    maxFrame : number = 1
    markedForDetection : boolean = false

    fps : number = 5
    frameInterval : number = 10000/this.fps
    frameTimer : number = 0
    frameX : number = 0

    constructor(x:number, y:number, xx:number, yy:number){
        this.x = x 
        this.y = y
        this.xx = xx
        this.yy = yy
    }

    draw(){
        let fivHImg : CanvasImageSource = new Image()
        fivHImg.src = './pics/bonuss.png'
        ctx!.drawImage(fivHImg, this.frameX * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width, this.height)
    }
    
    update(deltaTime:number){
        this.x -= this.xx
        if(this.frameTimer > this.frameInterval){
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }
        this.draw()
        if(this.x + this.width < 0) this.markedForDetection = true
    }

}