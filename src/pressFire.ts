import setIMG from "./setImg"
export default function pressFire(){
        console.log('kolorki')
        let num : number = 1200
        for(let a = 0; a < 10000; a++){
            window.setTimeout(function(){
                setIMG('./pics/4.png')
                //console.log('4')
            }, 1000 + num * a)
            window.setTimeout(function(){
                setIMG('./pics/3.png')
                //console.log('3')
            }, 1200 + num * a)
            window.setTimeout(function(){
                setIMG('./pics/2.png')
                //console.log('2')
            }, 1400 + num * a)
            window.setTimeout(function(){
                setIMG('./pics/1.png')
                //console.log('1')
            }, 1600 + num * a)
            window.setTimeout(function(){
                setIMG('./pics/2.png')
                //console.log('2')
            }, 1800 + num * a)
            window.setTimeout(function(){
                setIMG('./pics/3.png')
                //console.log('3')
            }, 2000 + num * a)
        }
    // }
}