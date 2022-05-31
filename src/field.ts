import Base from "./base";
import Plane from "./plane";
import Background from "./background";
import Fire from "./fire";
import Points from "./points";
import LifesAndGuns from "./lifesAndGuns";
import Grid from "./grid";
import FiveH from "./fiveH";
import Boom from "./boom";

export default function field(lives : number){
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    //console.log('field')


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
    let fiveH = new FiveH(0, 0, 0, 0)
    let enem1Frame : number = 0
    let boomFrame : number = 0

    const shots : any[] = []
    let pointss : number = 0
    let toChange : number = 0

    let booms : Boom[] = []

    const grids = [new Grid(0, 0, 0, 0)]

    function animate(){
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
                shot.updateFire()
            }
            
        })
        booms.forEach(boom =>{
            console.log(boomFrame)
            if(boomFrame <= 15){
                boom.drawBoom(boomFrame)
                boomFrame++
            }else {
                boomFrame = 0
                return
            }
            
        })
        
        
        grids.forEach((grid) =>{
            grid.update()
            grid.enemies.forEach((enemy, index) =>{
                let fiveH = new FiveH(enemy.x, enemy.y, 0, 0)
                enemy.updateEnemy(enem1Frame++)
                enemy.drawEnemy()
                
                
                if(enemy.x < 0){
                    grid.enemies.splice(index, 1)
                    console.log(grid.enemies)
                }


                
                shots.forEach((shot, index1) =>{
                    if(shot.x >= enemy.x && shot.y >= enemy.y && shot.y+21 >= enemy.y){
                        
                        //nie wiem czemu nie dziala
                        booms.push(new Boom(enemy.x, enemy.y))
                        
                        
                        setTimeout(()=>{
                            const myEnem = grid.enemies.find(enemy2 => enemy2 === enemy)

                            const myShot = shots.find(shot2 => shot2 === shot)

                            if(myEnem && myShot){
                                pointss += 1
                                
                                grid.enemies.splice(index, 1)
                                shots.splice(index1, 1)

                                if(grid.enemies.length == 0){
                                    fiveH.update500()
                                    pointss += 5
                                }
                            }
                            
                        }, 0)
                    }
                })
            })
        })

        


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
            plane.yy = 4
            return
        }else if(keys.left.pressed){
            plane.xx = -4
            return
        }else if(keys.right.pressed){
            plane.xx = 4
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
    
    animate()
    
    
    addEventListener('keydown', movePlane)
    addEventListener('keyup', keyupp)
    // addEventListener('keyup', movePlane1)
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
                //keys.up.pressed = true
                plane.yy = -13
                console.log('W')
                plane.imgstatek = 'plane3.png'
            }
        }else if(key.keyCode == 65){
            if(plane.x <= -5){
                return
            }else{
                //keys.left.pressed = true
                plane.xx = -13
                console.log('A')
                plane.imgstatek = 'plane1.png'
            }
        }else if(key.keyCode == 83){
            if(plane.y >= 590){
                return
            }else{
                //keys.down.pressed = true
                plane.yy = 13
                console.log('S') 
                plane.imgstatek = 'plane2.png'
            }
        }else if(key.keyCode == 68){
            if(plane.x >= 970){
                return
            }else{
                //keys.right.pressed = true
                plane.xx = 13
                console.log('D')
                plane.imgstatek = 'plane1.png'
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
            console.log(x,y)
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