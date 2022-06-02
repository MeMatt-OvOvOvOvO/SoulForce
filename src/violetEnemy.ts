import Enemy from "./baseEnemy";
const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class VioletEnemy extends Enemy{
    x: number
    y: number
    speedX: number
    speedY: number
    maxFrame: number
    width: number
    height: number
    enem:number
    a : number

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
    }
}