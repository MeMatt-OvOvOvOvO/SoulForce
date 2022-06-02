import Enemy from "./baseEnemy";
const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class GreenEnemy extends Enemy{
    x: number
    y: number
    speedX: number
    speedY: number
    maxFrame: number
    width: number
    height: number
    enem:number
    angle:number = 0
    va : number = 0.07
    a : number
    angleSpeed : number = 0.55
    curve : number = -600
    site : number

    constructor(x:number, y:number, speedX:number, speedY:number, maxFrame:number, width:number, height:number, enem:number, a:number, site: number){
        super(x, y, speedX, speedY, maxFrame, width, height, enem)
        this.a = a * 10 + this.angle 
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.maxFrame = maxFrame
        this.width = width
        this.height = height
        this.enem = enem
        this.site = site
    }
    update(deltaTime:number){
        super.updateEnemy(deltaTime)
        if(this.site == 1){
            this.x = this.curve * Math.sin(this.a * Math.PI/-180) + (canvas!.width/2 - this.width/2)
            this.y = this.curve * Math.cos(this.a * Math.PI/-180) - (canvas!.height/2 - this.height/2)
        }else if(this.site == 2){
            this.x = this.curve * Math.sin(this.a * Math.PI/180) + (canvas!.width/2 - this.width/2)
            this.y = this.curve * Math.cos(this.a * Math.PI/-180) - (canvas!.height/2 - this.height/2)
        }
        
        this.a += this.angleSpeed   
        
    }
}