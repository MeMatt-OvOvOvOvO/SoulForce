import Enemy from "./baseEnemy";
const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Enem2 extends Enemy{
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
    a:number

    constructor(x:number, y:number, speedX:number, speedY:number, maxFrame:number, width:number, height:number, enem:number, a:number){
        super(x, y, speedX, speedY, maxFrame, width, height, enem)
        this.a = a
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.maxFrame = maxFrame
        this.width = width
        this.height = height
        this.enem = enem
    }
    update(deltaTime:number){
        super.updateEnemy(deltaTime)
        // if(this.a % 2 === 0){
        //     this.angle += this.va
        //     this.y += Math.cos(this.angle)
        //     this.angle += 0.0183564 * this.a *-0.2
        // }else{
        //     this.angle += this.va
        //     this.y += Math.sin(this.angle)
        //     this.angle += 0.0183564 * this.a *-0.2
        // }
        this.angle += this.va
        this.y += Math.cos(this.angle)
        this.angle += 0.0183564 * this.a *-0.2
        
    }
}