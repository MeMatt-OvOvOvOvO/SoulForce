const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Background{
    back : CanvasImageSource

    x1 : number
    y1 : number

    x2 : number 
    y2 : number

    x3 : number
    y3 : number

    w : number
    h : number
    
    constructor(back: CanvasImageSource, x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3: number, w: number, h: number){
        this.back = back
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.x3 = x3
        this.y3 = y3
        this.w = w
        this.h = h
    }

    render1(){
        this.x1 -= 3
        this.x2 -= 3
        this.x3 -= 3

        if(this.x1 + this.w <= 0) this.x1 = this.x3 + this.w
        if(this.x2 + this.w <= 0) this.x2 = this.x1 + this.w
        if(this.x3 + this.w <= 0) this.x3 = this.x2 + this.w

        ctx!.drawImage(this.back, this.x1, this.y1)
        ctx!.drawImage(this.back, this.x2, this.y2)
        ctx!.drawImage(this.back, this.x3, this.y3)
    }

    render2(){
        this.x1 -= 2
        this.x2 -= 2
        this.x3 -= 2

        if(this.x1 + this.w <= 0) this.x1 = this.x3 + this.w
        if(this.x2 + this.w <= 0) this.x2 = this.x1 + this.w
        if(this.x3 + this.w <= 0) this.x3 = this.x2 + this.w

        ctx!.drawImage(this.back, this.x1, this.y1)
        ctx!.drawImage(this.back, this.x2, this.y2)
        ctx!.drawImage(this.back, this.x3, this.y3)
    }

    render3(){
        this.x1 -= 1.5
        this.x2 -= 1.5
        this.x3 -= 1.5

        if(this.x1 + this.w <= 0) this.x1 = this.x3 + this.w
        if(this.x2 + this.w <= 0) this.x2 = this.x1 + this.w
        if(this.x3 + this.w <= 0) this.x3 = this.x2 + this.w

        ctx!.drawImage(this.back, this.x1, this.y1)
        ctx!.drawImage(this.back, this.x2, this.y2)
        ctx!.drawImage(this.back, this.x3, this.y3)
    }

    
}
