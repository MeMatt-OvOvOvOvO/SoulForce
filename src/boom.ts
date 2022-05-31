const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Boom{
    public x : number
    public y : number

    constructor(x:number, y:number){
        this.x = x
        this.y = y

    }

    drawBoom(boomFrame : number){
        let boom : CanvasImageSource = new Image()
        boom.src = './boom/boom.png'
        let spriteH : number = 109
        let spriteW : number = 120
        //console.log(boomFrame)

        if(boomFrame <= 14){
            
            if(boomFrame % 7 === 0) boomFrame > 2 ? boomFrame = 0 : boomFrame++
            ctx!.drawImage(boom, boomFrame * spriteW, 0, spriteW, spriteH, this.x, this.y, spriteW / 1.5, spriteH / 1.5);
        }else return
        
        
        //ctx!.drawImage(boom, 100, 200, 100, 300);
        //console.log('boom')
        
        //https://www.youtube.com/watch?v=KICADKr_zeM&ab_channel=Frankslaboratory
    }
    
}