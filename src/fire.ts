const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Fire{
    x : number
    y : number
    xx:number
    yy:number
    width:number
    height:number
    shot:number

    constructor(x:number, y:number, xx:number, yy:number, width:number, height:number, shot:number){
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
        this.width = width
        this.height = height
        this.shot = shot
    }

    drawFire(){
        let shots : CanvasImageSource = new Image()
        shots.src = './pics/shots'+this.shot+'.png'
        ctx!.drawImage(shots, this.x, this.y, this.width, this.height);
    }
    updateFire(){
        this.drawFire()
        this.y += this.yy
        this.x += this.xx
    }
}