const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Base{
    public x:number
    y:number
    xx:number
    yy:number

    constructor(x:number, y:number, xx:number, yy:number){
        this.x = x
        this.y = y
        this.xx = xx
        this.yy = yy
    }

    drawBase(){
        let baseImg : CanvasImageSource = new Image()
        baseImg.src = './pics/stacja.png'
        ctx!.drawImage(baseImg, this.x, this.y);
    }
    updateBase(){
        this.drawBase()
        this.y += this.yy
        this.x += this.xx
    }
}