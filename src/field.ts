import Base from "./base";
import Plane from "./plane";
import Background from "./background";
import Fire from "./fire";
import Points from "./points";
import LifesAndGuns from "./lifesAndGuns";
import FiveH from "./fiveH";
import Boom from "./boom";
import Enem2 from "./enemy22";
import GreenEnemy from "./greenEnemy";
import GreenEnemy1 from "./greenEnemy1";
import Ship from "./transportShip";
import VioletEnemy from "./violetEnemy";
import Orb from "./fireOrb";

export default function field(lives : number){
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    ctx!.fillStyle = "black"
    ctx?.fillRect(0, 0, canvas!.width, canvas!.height)

    const plane = new Plane(-5, 275, 0, 0)
    const keys = {
        right:{
            pressed: false
        },
        left:{
            pressed: false
        },
        up:{
            pressed: false
        },
        down:{
            pressed: false
        },
        fire:{
            pressed: false
        }
    }

    let shh : number = 1

    let back1 : CanvasImageSource = new Image()
    back1.src = './background/back1.png'

    let back2 : CanvasImageSource = new Image()
    back2.src = './background/back2.png'

    let back3 : CanvasImageSource = new Image()
    back3.src = './background/back3.png'

    var background1 : Background = new Background(back1, 0, 0, 1033, 0, 2066, 0, 1033, 660)
    var background2 : Background = new Background(back2, 0, 0, 1033, 0, 2066, 0, 1033, 660)
    var background3 : Background = new Background(back3, 0, 0, 1033, 0, 2066, 0, 1033, 660)
    const myBase = new Base(0, 140, 0, 0)
    const points = new Points(1)
    const lifesAndGuns = new LifesAndGuns()

    let speed : number = 0

    const shots : any[] = []
    let pointss : number = 0
    let toChange : number = 0
    let fivHArr : FiveH[] = []
    let booms : Boom[] = []
    let lastTime : number = 0
    let orbArr : Orb[] = []

    let enemiess1 : Enem2[] = []
    let enemiess2 : Enem2[] = []
    let enemiess3 : GreenEnemy[] = []
    let enemiess4 : GreenEnemy1[] = []
    let enemiess5 : VioletEnemy[] = []
    let enemiess6 : VioletEnemy[] = []


    let arShip : Ship[] = []

    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess1.push(new Enem2(140+canvas!.width + a * 105, 285, 5, 0, 3, 101, 99, 11, a))
        }
    }, 2800)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess2.push(new Enem2(140+canvas!.width + a * 105, 185, 5, 0, 3, 101, 99, 11, a))
        }
    }, 8500)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess1.push(new Enem2(140+canvas!.width + a * 105, 435, 5, 0, 3, 103, 100, 22, a))
        }
    }, 14200)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess3.push(new GreenEnemy(400, 50, 5, 0, 1, 69, 65, 33, a, 1))
        }
    }, 19000)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess4.push(new GreenEnemy1(20, 50, 5, 0, 1, 69, 65, 33, a))
        }
    }, 23800)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess2.push(new Enem2(140+canvas!.width + a * 105, 225, 5, 0, 3, 101, 99, 11, a))
        }
    }, 28900)
    
    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess1.push(new Enem2(140+canvas!.width + a * 105, 365, 5, 0, 3, 101, 99, 11, a))
        }
    }, 32900)
    
    setTimeout(()=>{
        for(let a = 1; a < 5; a++){
            enemiess5.push(new VioletEnemy(40+a*202, 0 - a*25, 0, 5, 1, 87, 82, 44, a))
        }
    }, 36900)
    
    setTimeout(()=>{
        for(let a = 1; a < 5; a++){
            enemiess6.push(new VioletEnemy(40+a*202, 660 + a*25, 0, -5, 1, 87, 82, 44, a))
        }
    }, 39900)
    
    setTimeout(()=>{
        arShip.push(new Ship(140+canvas!.width, 405, 2, 0))
    }, 40000)

    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess3.push(new GreenEnemy(400, 50, 5, 0, 1, 69, 65, 33, a, 2))
        }
    }, 41000)

    setTimeout(()=>{
        for(let a = 1; a < 6; a++){
            enemiess3.push(new GreenEnemy(400, 50, 5, 0, 1, 69, 65, 33, a, 1))
        }
    }, 48400)

    setTimeout(()=>{
        for(let a = 1; a < 5; a++){
            enemiess6.push(new VioletEnemy(40+a*202, 660 + a*25, 0, -5, 1, 87, 82, 44, a))
        }
    }, 53900)

    setTimeout(()=>{
        for(let a = 1; a < 5; a++){
            enemiess5.push(new VioletEnemy(40+a*202, 0 - a*25, 0, 5, 1, 87, 82, 44, a))
        }
    }, 57000)
    

    let over : CanvasImageSource = new Image()
    over.src = './pics/gameover.png' 

    let shott : HTMLAudioElement = new Audio()
    shott.src = './sound/shot.wav'    
    shott.volume = 0.1
    
    function animate(timeStamp : number){
        const deltaTime = timeStamp - lastTime
        requestAnimationFrame(animate)
        
        ctx!.fillStyle = "black"

        ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

        //render stars in background
        background1.render1()
        background2.render2()
        background3.render3()

        points.drawPoints(pointss)

        lifesAndGuns.drawScore()
        lifesAndGuns.drawGuns(shh)
        lifesAndGuns.drawLifes(lives)
        
        if(myBase.x >= -2){
            myBase.xx -= 1.5
            myBase.updateBase()
        }else {
            myBase.updateBase()
        }

        shots.forEach((shot, index)=>{
            
            if(shot.x >= 1066){
                setTimeout(() => {
                    console.log('za plansza')
                    shots.splice(index, 1)
                }, 0)
            }else{
                shott.play()
                shot.updateFire()
            }
            
        })

        enemiess1.forEach((enemy1, index)=>{
            enemy1.update(deltaTime)
            if(enemy1.markedForDeletion) enemiess1.slice(index, 1)


            shots.forEach((shot, index1) =>{
                if(shot.x < enemy1.x + enemy1.width && shot.x + shot.width > enemy1.x && shot.y < enemy1.y + enemy1.height && shot.y + shot.height > enemy1.y){
                    booms.push(new Boom(enemy1.x + 20, enemy1.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess1.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess1.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess1.length == 0){
                                fivHArr.push(new FiveH(enemy1.x, enemy1.y, 2, 4))                                
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }

            })

            if(enemy1.x + enemy1.width < 0) enemiess1.splice(index, 1)

            if(plane.x < enemy1.x + enemy1.width && plane.x + plane.width > enemy1.x && plane.y < enemy1.y + enemy1.height && plane.y + plane.height > enemy1.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                

                console.log('kolizja')
            }
        })

        enemiess2.forEach((enemy2, index)=>{
            enemy2.update(deltaTime)
            if(enemy2.markedForDeletion) enemiess2.slice(index, 1)

            shots.forEach((shot, index1) =>{ 
                if(shot.x < enemy2.x + enemy2.width && shot.x + shot.width > enemy2.x && shot.y < enemy2.y + enemy2.height && shot.y + shot.height > enemy2.y){

                    booms.push(new Boom(enemy2.x + 20, enemy2.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess2.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess2.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess2.length == 0){
                                fivHArr.push(new FiveH(enemy2.x, enemy2.y, 2, 4))
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }
            })

            if(enemy2.x + enemy2.width < 0) enemiess2.splice(index, 1)

            if(plane.x < enemy2.x + enemy2.width && plane.x + plane.width > enemy2.x && plane.y < enemy2.y + enemy2.height && plane.y + plane.height > enemy2.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                console.log('kolizja')
            }

            
        })

        enemiess3.forEach((enemy3, index)=>{
            enemy3.update(deltaTime)
            if(enemy3.markedForDeletion) enemiess3.slice(index, 1)

            shots.forEach((shot, index1) =>{
                if(shot.x < enemy3.x + enemy3.width && shot.x + shot.width > enemy3.x && shot.y < enemy3.y + enemy3.height && shot.y + shot.height > enemy3.y){
                    booms.push(new Boom(enemy3.x + 20, enemy3.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess3.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess3.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess3.length == 0){
                                fivHArr.push(new FiveH(enemy3.x, enemy3.y, 2, 4))
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }
            })
            if(plane.x < enemy3.x + enemy3.width && plane.x + plane.width > enemy3.x && plane.y < enemy3.y + enemy3.height && plane.y + plane.height > enemy3.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                console.log('kolizja')
            }
            
        })


        enemiess4.forEach((enemy4, index)=>{
            enemy4.update(deltaTime)
            if(enemy4.markedForDeletion) enemiess4.slice(index, 1)

            shots.forEach((shot, index1) =>{
                if(shot.x < enemy4.x + enemy4.width && shot.x + shot.width > enemy4.x && shot.y < enemy4.y + enemy4.height && shot.y + shot.height > enemy4.y){
                    booms.push(new Boom(enemy4.x + 20, enemy4.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess4.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess4.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess4.length == 0){
                                fivHArr.push(new FiveH(enemy4.x, enemy4.y, 2, 4))
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }
            })
            if(plane.x < enemy4.x + enemy4.width && plane.x + plane.width > enemy4.x && plane.y < enemy4.y + enemy4.height && plane.y + plane.height > enemy4.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                console.log('kolizja')
            }
            
        })

        enemiess5.forEach((enemy5, index)=>{
            enemy5.update(deltaTime)
            if(enemy5.markedForDeletion) enemiess5.slice(index, 1)

            shots.forEach((shot, index1) =>{
                if(shot.x < enemy5.x + enemy5.width && shot.x + shot.width > enemy5.x && shot.y < enemy5.y + enemy5.height && shot.y + shot.height > enemy5.y){
                    booms.push(new Boom(enemy5.x + 20, enemy5.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess5.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess5.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess5.length == 0){
                                fivHArr.push(new FiveH(enemy5.x, enemy5.y, 2, 4))
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }
            })
            if(plane.x < enemy5.x + enemy5.width && plane.x + plane.width > enemy5.x && plane.y < enemy5.y + enemy5.height && plane.y + plane.height > enemy5.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                console.log('kolizja')
            }
            
        })

        enemiess6.forEach((enemy6, index)=>{
            enemy6.update(deltaTime)
            if(enemy6.markedForDeletion) enemiess6.slice(index, 1)

            shots.forEach((shot, index1) =>{
                if(shot.x < enemy6.x + enemy6.width && shot.x + shot.width > enemy6.x && shot.y < enemy6.y + enemy6.height && shot.y + shot.height > enemy6.y){
                    booms.push(new Boom(enemy6.x + 20, enemy6.y + 40, speed))
                    
                    
                    setTimeout(()=>{
                        const myEnem = enemiess6.find(enemy2 => enemy2 === enemy2)

                        const myShot = shots.find(shot2 => shot2 === shot)

                        if(myEnem && myShot){
                            pointss += 1
                            
                            enemiess6.splice(index, 1)
                            shots.splice(index1, 1)

                            if(enemiess6.length == 0){
                                fivHArr.push(new FiveH(enemy6.x, enemy6.y, 2, 4))
                                pointss += 5
                            }
                        }
                        
                    }, 0)
                }
            })
            if(plane.x < enemy6.x + enemy6.width && plane.x + plane.width > enemy6.x && plane.y < enemy6.y + enemy6.height && plane.y + plane.height > enemy6.y){
                // if(lives - 1 == 0){
                //     console.log('game over')
                //     ctx!.drawImage(over, 100, 100);
                    
                    
                // }else {
                //     ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
                //     field(lives-1)
                    
                // }
                console.log('kolizja')
            }
            
        })

        arShip.forEach((ship, index)=>{
            ship.updateShip(deltaTime)
            if(ship.markedForDeletion) arShip.slice(index, 1)
            shots.forEach((shot, index1) =>{
                if(shot.x < ship.x + ship.width && shot.x + shot.width > ship.x && shot.y < ship.y + ship.height && shot.y + shot.height > ship.y){
                    setTimeout(()=>{
                        const myShip = arShip.find(ship => ship === ship)
                        const myShot = shots.find(shot2 => shot2 === shot)
                        if(myShip && myShot){
                            orbArr.push(new Orb(ship.x, ship.y, 2, 0))
                            arShip.splice(index, 1)
                            shots.splice(index1, 1)
                        }
                    }, 0)
                }
            })            
        })

        

        fivHArr.forEach(bonus=>{
            bonus.draw()
        })

        orbArr.forEach((orb, index)=>{
            orb.update(deltaTime)
            if(plane.x < orb.x + orb.width && plane.x + plane.width > orb.x && plane.y < orb.y + orb.height && plane.y + plane.height > orb.y){
                shh = 2
                orbArr.splice(index, 1)
            }
        })


        arShip.forEach(ship=>{
            ship.drawShip()
        })

        arShip.forEach((ship, index)=>{
            ship.updateShip(deltaTime)
            if(ship.markedForDeletion) arShip.splice(index, 1)
        })

        fivHArr.forEach((bonus, index)=>{
            bonus.update(deltaTime)
            if(bonus.markedForDetection) fivHArr.splice(index, 1)
        })

        booms.forEach((boom, index)=>{
            boom.updateBoom(deltaTime)
            if(boom.markedForDetection) booms.splice(index, 1)
        })
        booms.forEach(boom=>{
            boom.drawBoom()
        })

        if(toChange == 0){
            if(plane.x <= 230){
                plane.xx += 8
    
                let flame : CanvasImageSource = new Image()
                flame.src = './pics/flame.png' 
                ctx!.drawImage(flame, plane.x-66, plane.y+13, 80, 30);
                plane.update()
                
            }else{
                toChange = 1
            }
        }else{
            plane.update()
        }

        if(keys.left.pressed && keys.up.pressed || keys.up.pressed && keys.left.pressed || keys.up.pressed && keys.right.pressed || keys.down.pressed && keys.left.pressed || keys.down.pressed && keys.right.pressed){
            return
        }else if(keys.up.pressed){
            if(plane.y <= 5){
                return 
            }else{
                plane.yy = -4
                return 
            }
        }else if(keys.down.pressed){
            plane.yy = 5
            return
        }else if(keys.left.pressed){
            plane.xx = -5
            return
        }else if(keys.right.pressed){
            plane.xx = 5
            return
        }else if(keys.fire.pressed){
            plane.yy = 0
            plane.xx = 0
            return
        }else{
            plane.yy = 0
            plane.xx = 0
        }
    }
    
    animate(0)

    setTimeout(()=>{
        while(enemiess3.length>0){
            enemiess3.pop()
        }  
    }, 26800)

    setTimeout(()=>{
        while(enemiess4.length>0){
            enemiess4.pop()
        } 
    }, 32000)

    setTimeout(()=>{
        while(enemiess3.length>0){
            enemiess3.pop()
        }   
    }, 48200)

    setTimeout(()=>{
        while(enemiess3.length>0){
            enemiess3.pop()
        }   
    }, 56200)
    
    
    addEventListener('keydown', movePlane)
    addEventListener('keyup', keyupp)
    function keyupp(){
        plane.imgstatek = 'plane1.png'
    }
    let x : number = 0
    let y : number = 275
    function movePlane(key: KeyboardEvent){
        if(key.keyCode == 87){
            if(plane.y <= -10){
                return
            }else{
                plane.yy = -15
                console.log('W')
                plane.imgstatek = 'plane3.png'
            }
        }else if(key.keyCode == 65){
            if(plane.x <= -5){
                return
            }else{
                plane.xx = -15
                console.log('A')
                plane.imgstatek = 'plane1.png'
            }
        }else if(key.keyCode == 83){
            if(plane.y >= 590){
                return
            }else{
                plane.yy = 15
                console.log('S') 
                plane.imgstatek = 'plane2.png'
            }
        }else if(key.keyCode == 68){
            if(plane.x >= 970){
                return
            }else{
                plane.xx = 15
                console.log('D')
                plane.imgstatek = 'plane1.png'
            }
        }else if(key.keyCode == 70){
                keys.fire.pressed = true
                if(shh == 1){
                    shots.push(new Fire(plane.x+70,plane.y+18,20,0, 21, 22, 1))
                }else{
                    shots.push(new Fire(plane.x+70,plane.y+18,20,0, 39, 27, 2))
                }
            
        }else{
            return
        }
    }

}