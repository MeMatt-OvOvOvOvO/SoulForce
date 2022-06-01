const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
interface Position {
    x: number;
    y: number;
}
interface Velocity {
    xx: number;
    yy: number;
}
export default class Plane implements Position, Velocity{
    x: number
    y: number
    xx: number
    yy: number
    width : number
    height : number
    public imgstatek : string = 'plane1.png'
    
    constructor(x:number, y: number, xx:number, yy: number){
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
        this.width = 95
        this.height = 60
        
    }
    drawCollisionShape(){
        ctx!.beginPath();
        ctx!.moveTo(this.x+5, this.y);
        ctx!.lineTo(this.x+20, this.y);
        ctx!.lineTo(this.x+95, this.y+30);
        ctx!.lineTo(this.x+60, this.y+55);
        ctx!.lineTo(this.x+5, this.y+55);


        ctx!.strokeStyle = '#ff0000';
        ctx!.closePath();
        ctx!.stroke();
    }

    draw(){
        this.drawCollisionShape()
        //ctx!.fillStyle = 'red'
        let statekk : CanvasImageSource = new Image();
        let img = './pics/' + this.imgstatek;
        statekk.src = img
        ctx?.drawImage(statekk, this.x, this.y, this.width, this.height)
        //console.log(this.x, this.y)
    }
    update(){
        this.draw()
        this.y += this.yy
        this.x += this.xx
    }
    firstFly(){
        this.draw()
        this.y += this.yy
        this.x += this.xx
    }
}