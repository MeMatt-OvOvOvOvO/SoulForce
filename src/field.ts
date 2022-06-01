import Base from "./base";
import Plane from "./plane";
import Background from "./background";
import Fire from "./fire";
import Points from "./points";
import LifesAndGuns from "./lifesAndGuns";
import FiveH from "./fiveH";
import Boom from "./boom";
import Enem2 from "./enemy22";

export default function field(lives : number){
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    //console.log('field')

    let kitty : HTMLAudioElement = new Audio()
    kitty.src = './sound/kitty.wav'    
    kitty.volume = 0.04
    kitty.play()


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

    let enemiess1 : Enem2[] = []
    let enemiess2 : Enem2[] = []
    let enemiess3 : Enem2[] = []

    for(let a = 1; a < 6; a++){
        enemiess1.push(new Enem2(1200+canvas!.width + a * 85, 285, 5, 0, 3, 101, 99, 11, a))
        enemiess2.push(new Enem2(2500+canvas!.width + a * 85, 185, 5, 0, 3, 101, 99, 11, a))
        enemiess3.push(new Enem2(3900+canvas!.width + a * 85, 435, 5, 0, 3, 103, 100, 22, a))
    }

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
        lifesAndGuns.drawGuns(1)
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
                shot.drawCollisionShape()
                shot.updateFire()
            }
            
        })
        //console.log(enemiess1)

        enemiess1.forEach((enemy1, index)=>{
            enemy1.update(deltaTime)
            if(enemy1.markedForDeletion) enemiess1.slice(index, 1)

            shots.forEach((shot, index1) =>{
                console.log(shot.x,shot.y)
                if(shot.x + 32 >= enemy1.x && shot.y >= enemy1.y && shot.y+21 >= enemy1.y){

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

            // if(enemy1.x -1 == plane.x + plane.width){
            //     kitty.pause()
            //     if(lives - 1 == 0){
            //         console.log('game over')
            //         ctx!.drawImage(over, 100, 100);
                    
                    
            //     }else {
            //         ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
            //         field(lives-1)
                    
            //     }
            // }
        })

        enemiess2.forEach((enemy2, index)=>{
            enemy2.update(deltaTime)
            if(enemy2.markedForDeletion) enemiess2.slice(index, 1)

            shots.forEach((shot, index1) =>{ 
                if(shot.x >= enemy2.x && shot.y >= enemy2.y && shot.y+21 >= enemy2.y){

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

            
        })

        enemiess3.forEach((enemy3, index)=>{
            enemy3.update(deltaTime)
            if(enemy3.markedForDeletion) enemiess3.slice(index, 1)

            shots.forEach((shot, index1) =>{
                if(shot.x >= enemy3.x && shot.y >= enemy3.y && shot.y+21 >= enemy3.y){

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

            
        })

        fivHArr.forEach(bonus=>{
            bonus.draw()
        })

        fivHArr.forEach((bonus, index)=>{
            bonus.update(deltaTime)
            if(bonus.markedForDetection) fivHArr.splice(index, 1)
        })

        booms.forEach((boom, index)=>{
            boom.updateBoom(deltaTime)
            if(boom.markedForDetection) booms.splice(index, 1)
        })
        booms.forEach((boom, index)=>{
            boom.drawBoom()
        })
        console.log(fivHArr)
        
        
        // grids.forEach((grid) =>{
        //     grid.update()
        //     grid.enemies.forEach((enemy, index) =>{
        //         //let fiveH = new FiveH(enemy.x, enemy.y, 0, 0)
        //         enemy.updateEnemy(enem1Frame++)
        //         enemy.drawEnemy()

        //         // enemy.updateEnemy(deltaTime)
        //         // enemy.drawEnemy()
                
                
        //         if(enemy.x < 0){
        //             grid.enemies.splice(index, 1)
        //             console.log(grid.enemies)
        //         }


                
        //         shots.forEach((shot, index1) =>{
        //             if(shot.x >= enemy.x && shot.y >= enemy.y && shot.y+21 >= enemy.y){

        //                 booms.push(new Boom(enemy.x + enemy.spriteH / 3, enemy.y + enemy.spriteW / 3, speed))
                        
                        
        //                 setTimeout(()=>{
        //                     const myEnem = grid.enemies.find(enemy2 => enemy2 === enemy)

        //                     const myShot = shots.find(shot2 => shot2 === shot)

        //                     if(myEnem && myShot){
        //                         pointss += 1
                                
        //                         grid.enemies.splice(index, 1)
        //                         shots.splice(index1, 1)

        //                         if(grid.enemies.length == 0){
        //                             fiveH.update500()
        //                             pointss += 5
        //                         }
        //                     }
                            
        //                 }, 0)
        //             }
        //         })
        //         //console.log('x',enemy.x, plane.x+plane.width)

        //         if(enemy.y == plane.y + plane.height){
        //             kitty.pause()
        //             if(lives - 1 == 0){
        //                 console.log('game over')
        //                 ctx!.drawImage(over, 100, 100);
                        
                       
        //             }else {
        //                 ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
        //                 field(lives-1)
                        
        //             }
        //         }
        //     })
        // })

        // grids2.forEach((grid) =>{
        //     grid.update()
        //     grid.enemies.forEach((enemy, index) =>{
        //         //let fiveH = new FiveH(enemy.x, enemy.y, 0, 0)
        //         enemy.updateEnemy(enem1Frame++)
        //         enemy.drawEnemy()

        //         // enemy.updateEnemy(deltaTime)
        //         // enemy.drawEnemy()
                
                
        //         if(enemy.x < 0){
        //             grid.enemies.splice(index, 1)
        //             console.log(grid.enemies)
        //         }


                
        //         shots.forEach((shot, index1) =>{
        //             if(shot.x >= enemy.x && shot.y >= enemy.y && shot.y+21 >= enemy.y){

        //                 booms.push(new Boom(enemy.x + enemy.spriteH / 3, enemy.y + enemy.spriteW / 3, speed))
                        
                        
        //                 setTimeout(()=>{
        //                     const myEnem = grid.enemies.find(enemy2 => enemy2 === enemy)

        //                     const myShot = shots.find(shot2 => shot2 === shot)

        //                     if(myEnem && myShot){
        //                         pointss += 1
                                
        //                         grid.enemies.splice(index, 1)
        //                         shots.splice(index1, 1)

        //                         if(grid.enemies.length == 0){
        //                             fiveH.update500()
        //                             pointss += 5
        //                         }
        //                     }
                            
        //                 }, 0)
        //             }
        //         })
        //         //console.log('x',enemy.x, plane.x+plane.width)

        //         if(enemy.y == plane.y + plane.height){
        //             kitty.pause()
        //             if(lives - 1 == 0){
        //                 kitty.pause()
        //                 console.log('game over')
        //                 ctx!.drawImage(over, 100, 100);
                        
                       
        //             }else {
        //                 ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
        //                 field(lives-1)
        //             }
        //         }

        //     })
        // })

        


        if(toChange == 0){
            if(plane.x <= 230){
                plane.xx += 8
    
                let flame : CanvasImageSource = new Image()
                flame.src = './pics/flame.png' 
                ctx!.drawImage(flame, plane.x-66, plane.y+13, 80, 30);
    
                //106, 48
                plane.update()
                
            }else{
                toChange = 1
            }
        }else{
            plane.update()
        }
        
        //console.log(plane.x, plane.y)
        //plane.drawCollisionShape()

        if(keys.left.pressed && keys.up.pressed || keys.up.pressed && keys.left.pressed || keys.up.pressed && keys.right.pressed || keys.down.pressed && keys.left.pressed || keys.down.pressed && keys.right.pressed){
            console.log('chuj')
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
    
       
    
    
    
    addEventListener('keydown', movePlane)
    addEventListener('keyup', keyupp)
    // addEventListener('keyup', movePlane1)
    function keyupp(){
        plane.imgstatek = 'plane1.png'
        plane.drawCollisionShape()
    }
    let x : number = 0
    let y : number = 275
    function movePlane(key: KeyboardEvent){
        if(key.keyCode == 87){
            if(plane.y <= -10){
                return
            }else{
                //keys.up.pressed = true
                plane.yy = -15
                console.log('W')
                plane.imgstatek = 'plane3.png'
            }
        }else if(key.keyCode == 65){
            if(plane.x <= -5){
                return
            }else{
                //keys.left.pressed = true
                plane.xx = -15
                console.log('A')
                plane.imgstatek = 'plane1.png'
                plane.drawCollisionShape()
            }
        }else if(key.keyCode == 83){
            if(plane.y >= 590){
                return
            }else{
                //keys.down.pressed = true
                plane.yy = 15
                console.log('S') 
                plane.imgstatek = 'plane2.png'
            }
        }else if(key.keyCode == 68){
            if(plane.x >= 970){
                return
            }else{
                //keys.right.pressed = true
                plane.xx = 15
                console.log('D')
                plane.imgstatek = 'plane1.png'
                plane.drawCollisionShape()
            }
        }else if(key.keyCode == 70){
            // if(plane.x <= 230){
            //     console.log('nie mozna strzelac')
            // }else {
                keys.fire.pressed = true
                shots.push(new Fire(plane.x+70,plane.y+18,20,0))
            // }
                console.log(shots)
            
        }else{
            //console.log(x,y)
            return
        }
    }
    // function movePlane1(key:any){
    //     switch(key.keyCode){
    //         case 87:
    //             keys.up.pressed = false
    //             console.log("W")
    //             break
    //         case 65:
    //             keys.left.pressed = false
    //             console.log('A')
    //             break
    //         case 83:
    //             keys.down.pressed = false
    //             console.log('S')
    //             break
    //         case 68:
    //             keys.right.pressed = false
    //             console.log('D')
    //             break
    //         case 70:
    //             console.log('STOP FIRE')
    //             break
    //     }
    // }

}