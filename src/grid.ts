import Enemy1 from "./enemy1";
const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Grid{
    public x:number
    y:number
    xx:number
    yy:number
    enemies: any[] = []
    angle:number = 0
    constructor(x:number, y:number, xx:number, yy:number){
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
        this.angle 
        

        for(let i = 0; i < 5; i++){
            let pos = {
                x: i * 80,
                y: Math.sin(this.angle)
            }
            //console.log('pos',pos.x, pos.y)
            this.enemies.push(new Enemy1(1066, 320, 0, 0, 0, -i, pos))
            this.angle += 0.1
            
        }    
        
    }
    update(){
    }
}