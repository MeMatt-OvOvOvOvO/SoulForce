const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class Points{
    points : number
    constructor(points:number){
        this.points = points
    }

    drawPoints(points : number){

        let strPoints : string = points.toString()
        
        let zero : CanvasImageSource = new Image()
        zero.src = './score/0.png'

        let first : CanvasImageSource = new Image()
        let second : CanvasImageSource = new Image()
        let third : CanvasImageSource = new Image()

        if(strPoints.length == 1){
            if(points == 0){
                ctx!.drawImage(zero, 566, 0, 45, 39);
                ctx!.drawImage(zero, 604, 0, 45, 39);
            }else{
                third.src = './score/' + strPoints + '.png'
                ctx!.drawImage(third, 528, 0, 45, 39);
                ctx!.drawImage(zero, 566, 0, 45, 39);
                ctx!.drawImage(zero, 604, 0, 45, 39);
            }
            
        }else if(strPoints.length == 2){
            second.src = './score/' + strPoints.charAt(0) + '.png'
            third.src = './score/' + strPoints.charAt(1) + '.png'
            ctx!.drawImage(second, 490, 0, 45, 39);
            ctx!.drawImage(third, 528, 0, 45, 39);
            ctx!.drawImage(zero, 566, 0, 45, 39);
            ctx!.drawImage(zero, 604, 0, 45, 39);
        }else if(strPoints.length == 3){
            first.src = './score/' + strPoints.charAt(0) + '.png'
            second.src = './score/' + strPoints.charAt(1) + '.png'
            third.src = './score/' + strPoints.charAt(2) + '.png'
            ctx!.drawImage(first, 452, 0, 45, 39);
            ctx!.drawImage(second, 490, 0, 45, 39);
            ctx!.drawImage(third, 528, 0, 45, 39);
            ctx!.drawImage(zero, 566, 0, 45, 39);
            ctx!.drawImage(zero, 604, 0, 45, 39);
        }  
    }
}