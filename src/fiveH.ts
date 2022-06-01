const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class FiveH{
    x:number
    y:number
    xx:number
    yy:number

    constructor(x:number, y:number, xx:number, yy:number){
        this.x = x 
        this.y = y
        this.xx = xx
        this.yy = yy

    }

    draw500(){
        let fivHImg : CanvasImageSource = new Image()
        fivHImg.src = './pics/500.png'
        //console.log(this.x, this.y)
        ctx!.drawImage(fivHImg, this.x, this.y);
    }
    
    update500(){
        this.draw500()
        this.y -= this.yy
        this.x -= this.xx
    }

}