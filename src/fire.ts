const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Fire{
    public x : number
    public y : number
    xx:number
    yy:number

    constructor(x:number, y:number, xx:number, yy:number){
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
    }
    drawCollisionShape(){
        ctx!.beginPath();
        ctx!.moveTo(this.x, this.y);
        ctx!.lineTo(this.x+32, this.y);
        ctx!.lineTo(this.x+32, this.y+25);
        ctx!.lineTo(this.x, this.y+25);
        ctx!.strokeStyle = '#ff0000';
        ctx!.closePath();
        ctx!.stroke();
    }

    drawFire(){
        let shots : CanvasImageSource = new Image()
        shots.src = './pics/shots1.png'
        ctx!.drawImage(shots, this.x, this.y, 21, 22);
    }
    updateFire(){
        this.drawFire()
        this.y += this.yy
        this.x += this.xx
    }
}