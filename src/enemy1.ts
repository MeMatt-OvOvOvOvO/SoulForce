const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Enemy1{
    public x:number
    y:number
    xx:number
    yy:number
    frame : number
    angle : number
    posy: number

    pos:{}

    constructor(x:number, y:number, xx:number, yy:number, frame:number, angle:number, pos:{x:number, y:number}){
        this.x = x + pos.x
        this.posy = pos.y
        this.y = y
        this.xx = xx
        this.yy = yy
        this.frame = frame
        this.angle = angle
        this.pos = pos
    }
    updateEnemy(myFrame : number){
        let spriteW : number = 105
        this.x -= 5
        this.y += Math.sin(this.angle)
        this.angle += 0.1
        
        if(this.x + spriteW / 1.5 < 0) this.x = 1066
        //if(this.x + spriteW / 1.5 < 0) console.log('statek za plansza')
        if(myFrame % 4 === 0) this.frame > 4 ? this.frame = 0 : this.frame++
        
    }

    drawEnemy(){
        console.log('dupaduposdasda')
        let enemImg : CanvasImageSource = new Image()
        enemImg.src = './enemies/1.png'
        let spriteH : number = 99
        let spriteW : number = 105
        ctx!.drawImage(enemImg, this.frame * spriteW, 0, spriteW, spriteH, this.x, this.y, spriteW / 1.5, spriteH / 1.5);
        
    }

}