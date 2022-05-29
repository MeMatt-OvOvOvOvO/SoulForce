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