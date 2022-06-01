import field from "./field";
import pressFire from "./pressFire";
export default function firstScreen(){

    let arr : number[] = [0,]

    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    const image = new Image();
    let image1 = new Image()
    const imgs : String[] = ['1.png', '2.png', '3.png', '4.png']

    image.addEventListener("load", e => {
        //proste rysowanie
        

        //rysowanie z przeskalowaniem
        ctx?.drawImage(image, 0, 0, canvas!.width, canvas!.height);
        //ctx?.drawImage(image1, 432, 565, 200, 30);      

        //obwódka dla czytelności
        ctx?.stroke();
    });
    pressFire()
    window.addEventListener('keydown', ckeck, false)
    function ckeck(key:KeyboardEvent){
        if(key.keyCode == 70){
            ctx!.fillStyle = "black"
            ctx?.fillRect(0, 30, canvas!.width, 30)
            ctx?.fillRect(0, 605, canvas!.width, 30)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 90, canvas!.width, 30)
                ctx?.fillRect(0, 545, canvas!.width, 30)
            }, 100)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 150, canvas!.width, 30)
                ctx?.fillRect(0, 485, canvas!.width, 30)
            }, 150)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 210, canvas!.width, 30)
                ctx?.fillRect(0, 425, canvas!.width, 30)
            }, 200)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 270, canvas!.width, 30)
                ctx?.fillRect(0, 365, canvas!.width, 30)
            }, 250)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 300, canvas!.width, 35)
                ctx?.fillRect(0, 335, canvas!.width, 30)
            }, 300)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 240, canvas!.width, 30)
                ctx?.fillRect(0, 395, canvas!.width, 30)
            }, 350)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 180, canvas!.width, 30)
                ctx?.fillRect(0, 455, canvas!.width, 30)
            }, 400)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 120, canvas!.width, 30)
                ctx?.fillRect(0, 515, canvas!.width, 30)
            }, 450)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 60, canvas!.width, 30)
                ctx?.fillRect(0, 575, canvas!.width, 30)
            }, 500)
            window.setTimeout(function(){
                ctx!.fillStyle = "black"
                ctx?.fillRect(0, 0, canvas!.width, 30)
                ctx?.fillRect(0, 635, canvas!.width, 30)
                // pressFire(pressed)
                
            }, 550)
            

            window.setTimeout(function(){
                window.removeEventListener('keydown', ckeck)
                ctx?.clearRect(0, 0, canvas!.width, canvas!.height)
                
                
                field(3)

            }, 600)
            //https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses
        }
    }  
    
    image.src = "./pics/sc1.png";
}