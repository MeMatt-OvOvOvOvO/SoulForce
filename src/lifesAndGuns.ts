const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");
export default class LifesAndGuns{
    drawScore(){
        let score : CanvasImageSource = new Image()
        score.src = './pics/score.png'
        ctx!.drawImage(score, 0, -3, 50, 50);
    }
    drawGuns(guns:number){
        let guns1 : CanvasImageSource = new Image()
        guns1.src = './pics/guns' + guns + '.png'
        ctx!.drawImage(guns1, 17, 3, 34, 15);
    }
    drawLifes(life:number){
        let lifes : CanvasImageSource = new Image()
        lifes.src = './pics/' + life + 'lifes.png'
        ctx!.drawImage(lifes, 48, 20, 23, 23);
    }
}