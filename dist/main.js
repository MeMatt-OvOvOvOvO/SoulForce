/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Background {
    constructor(back, x1, y1, x2, y2, x3, y3, w, h) {
        this.back = back;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.w = w;
        this.h = h;
    }
    render1() {
        this.x1 -= 3;
        this.x2 -= 3;
        this.x3 -= 3;
        if (this.x1 + this.w <= 0)
            this.x1 = this.x3 + this.w;
        if (this.x2 + this.w <= 0)
            this.x2 = this.x1 + this.w;
        if (this.x3 + this.w <= 0)
            this.x3 = this.x2 + this.w;
        ctx.drawImage(this.back, this.x1, this.y1);
        ctx.drawImage(this.back, this.x2, this.y2);
        ctx.drawImage(this.back, this.x3, this.y3);
    }
    render2() {
        this.x1 -= 2;
        this.x2 -= 2;
        this.x3 -= 2;
        if (this.x1 + this.w <= 0)
            this.x1 = this.x3 + this.w;
        if (this.x2 + this.w <= 0)
            this.x2 = this.x1 + this.w;
        if (this.x3 + this.w <= 0)
            this.x3 = this.x2 + this.w;
        ctx.drawImage(this.back, this.x1, this.y1);
        ctx.drawImage(this.back, this.x2, this.y2);
        ctx.drawImage(this.back, this.x3, this.y3);
    }
    render3() {
        this.x1 -= 1.5;
        this.x2 -= 1.5;
        this.x3 -= 1.5;
        if (this.x1 + this.w <= 0)
            this.x1 = this.x3 + this.w;
        if (this.x2 + this.w <= 0)
            this.x2 = this.x1 + this.w;
        if (this.x3 + this.w <= 0)
            this.x3 = this.x2 + this.w;
        ctx.drawImage(this.back, this.x1, this.y1);
        ctx.drawImage(this.back, this.x2, this.y2);
        ctx.drawImage(this.back, this.x3, this.y3);
    }
}
exports["default"] = Background;


/***/ }),

/***/ "./src/base.ts":
/*!*********************!*\
  !*** ./src/base.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Base {
    constructor(x, y, xx, yy) {
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
    }
    drawBase() {
        let baseImg = new Image();
        baseImg.src = './pics/stacja.png';
        ctx.drawImage(baseImg, this.x, this.y);
    }
    updateBase() {
        this.drawBase();
        this.y += this.yy;
        this.x += this.xx;
    }
}
exports["default"] = Base;


/***/ }),

/***/ "./src/baseEnemy.ts":
/*!**************************!*\
  !*** ./src/baseEnemy.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Enemy {
    constructor(x, y, speedX, speedY, maxFrame, width, height, enem) {
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 5;
        this.frameInterval = 100000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.maxFrame = maxFrame;
        this.width = width;
        this.height = height;
        this.enem = enem;
    }
    updateEnemy(deltaTime) {
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame)
                this.frameX++;
            else
                this.frameX = 0;
        }
        else {
            this.frameTimer += deltaTime;
        }
        this.drawEnemy();
        if (this.x + this.width < 0)
            this.markedForDeletion = true;
    }
    drawEnemy() {
        let image = new Image();
        image.src = './enemies/' + this.enem + '.png';
        ctx.drawImage(image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width / 1.52, this.height / 1.52);
    }
}
exports["default"] = Enemy;


/***/ }),

/***/ "./src/boom.ts":
/*!*********************!*\
  !*** ./src/boom.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Boom {
    constructor(x, y, speed) {
        this.spriteH = 109;
        this.spriteW = 120;
        this.sizeModifire = 0.8;
        this.width = this.spriteW * this.sizeModifire;
        this.height = this.spriteH * this.sizeModifire;
        this.frameX = 0;
        this.maxFrame = 6;
        this.markedForDetection = false;
        this.fps = 5;
        this.frameInterval = 100000 / this.fps;
        this.frameTimer = 0;
        this.x = x - this.width * 0.5;
        this.y = y - this.width * 0.5;
        this.speed = speed;
    }
    drawBoom() {
        let sound = new Audio();
        sound.src = './sound/boom.wav';
        sound.volume = 0.02;
        if (this.frameX === 0)
            sound.play();
        let image = new Image();
        image.src = './boom/booom.png';
        ctx.drawImage(image, this.frameX * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width, this.height);
    }
    updateBoom(deltaTime) {
        this.x -= this.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        }
        else {
            this.frameTimer += deltaTime;
        }
        if (this.frameX > this.maxFrame)
            this.markedForDetection = true;
    }
}
exports["default"] = Boom;


/***/ }),

/***/ "./src/enemy22.ts":
/*!************************!*\
  !*** ./src/enemy22.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseEnemy_1 = __importDefault(__webpack_require__(/*! ./baseEnemy */ "./src/baseEnemy.ts"));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Enem2 extends baseEnemy_1.default {
    constructor(x, y, speedX, speedY, maxFrame, width, height, enem, a) {
        super(x, y, speedX, speedY, maxFrame, width, height, enem);
        this.angle = 0;
        this.va = 0.07;
        this.a = a;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.maxFrame = maxFrame;
        this.width = width;
        this.height = height;
        this.enem = enem;
    }
    update(deltaTime) {
        super.updateEnemy(deltaTime);
        // if(this.a % 2 === 0){
        //     this.angle += this.va
        //     this.y += Math.cos(this.angle)
        //     this.angle += 0.0183564 * this.a *-0.2
        // }else{
        //     this.angle += this.va
        //     this.y += Math.sin(this.angle)
        //     this.angle += 0.0183564 * this.a *-0.2
        // }
        this.angle += this.va;
        this.y += Math.cos(this.angle);
        this.angle += 0.0183564 * this.a * -0.2;
    }
}
exports["default"] = Enem2;


/***/ }),

/***/ "./src/field.ts":
/*!**********************!*\
  !*** ./src/field.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __importDefault(__webpack_require__(/*! ./base */ "./src/base.ts"));
const plane_1 = __importDefault(__webpack_require__(/*! ./plane */ "./src/plane.ts"));
const background_1 = __importDefault(__webpack_require__(/*! ./background */ "./src/background.ts"));
const fire_1 = __importDefault(__webpack_require__(/*! ./fire */ "./src/fire.ts"));
const points_1 = __importDefault(__webpack_require__(/*! ./points */ "./src/points.ts"));
const lifesAndGuns_1 = __importDefault(__webpack_require__(/*! ./lifesAndGuns */ "./src/lifesAndGuns.ts"));
const fiveH_1 = __importDefault(__webpack_require__(/*! ./fiveH */ "./src/fiveH.ts"));
const boom_1 = __importDefault(__webpack_require__(/*! ./boom */ "./src/boom.ts"));
const enemy22_1 = __importDefault(__webpack_require__(/*! ./enemy22 */ "./src/enemy22.ts"));
function field(lives) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    //console.log('field')
    let kitty = new Audio();
    kitty.src = './sound/kitty.wav';
    kitty.volume = 0.04;
    kitty.play();
    ctx.fillStyle = "black";
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);
    const plane = new plane_1.default(-5, 275, 0, 0);
    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        up: {
            pressed: false
        },
        down: {
            pressed: false
        },
        fire: {
            pressed: false
        }
    };
    let back1 = new Image();
    back1.src = './background/back1.png';
    let back2 = new Image();
    back2.src = './background/back2.png';
    let back3 = new Image();
    back3.src = './background/back3.png';
    var background1 = new background_1.default(back1, 0, 0, 1033, 0, 2066, 0, 1033, 660);
    var background2 = new background_1.default(back2, 0, 0, 1033, 0, 2066, 0, 1033, 660);
    var background3 = new background_1.default(back3, 0, 0, 1033, 0, 2066, 0, 1033, 660);
    const myBase = new base_1.default(0, 140, 0, 0);
    const points = new points_1.default(1);
    const lifesAndGuns = new lifesAndGuns_1.default();
    let speed = 0;
    const shots = [];
    let pointss = 0;
    let toChange = 0;
    let fivHArr = [];
    let booms = [];
    let lastTime = 0;
    let enemiess1 = [];
    let enemiess2 = [];
    let enemiess3 = [];
    for (let a = 1; a < 6; a++) {
        enemiess1.push(new enemy22_1.default(1200 + canvas.width + a * 85, 285, 5, 0, 3, 101, 99, 11, a));
        enemiess2.push(new enemy22_1.default(2500 + canvas.width + a * 85, 185, 5, 0, 3, 101, 99, 11, a));
        enemiess3.push(new enemy22_1.default(3900 + canvas.width + a * 85, 435, 5, 0, 3, 103, 100, 22, a));
    }
    let over = new Image();
    over.src = './pics/gameover.png';
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        requestAnimationFrame(animate);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //render stars in background
        background1.render1();
        background2.render2();
        background3.render3();
        points.drawPoints(pointss);
        lifesAndGuns.drawScore();
        lifesAndGuns.drawGuns(1);
        lifesAndGuns.drawLifes(lives);
        if (myBase.x >= -2) {
            myBase.xx -= 1.5;
            myBase.updateBase();
        }
        else {
            myBase.updateBase();
        }
        shots.forEach((shot, index) => {
            if (shot.x >= 1066) {
                setTimeout(() => {
                    console.log('za plansza');
                    shots.splice(index, 1);
                }, 0);
            }
            else {
                shot.updateFire();
            }
        });
        console.log(enemiess1);
        enemiess1.forEach((enemy1, index) => {
            enemy1.update(deltaTime);
            if (enemy1.markedForDeletion)
                enemiess1.slice(index, 1);
            shots.forEach((shot, index1) => {
                if (shot.x >= enemy1.x && shot.y >= enemy1.y && shot.y + 21 >= enemy1.y) {
                    booms.push(new boom_1.default(enemy1.x + 20, enemy1.y + 40, speed));
                    setTimeout(() => {
                        const myEnem = enemiess1.find(enemy2 => enemy2 === enemy2);
                        const myShot = shots.find(shot2 => shot2 === shot);
                        if (myEnem && myShot) {
                            pointss += 1;
                            enemiess1.splice(index, 1);
                            shots.splice(index1, 1);
                            if (enemiess1.length == 0) {
                                fivHArr.push(new fiveH_1.default(enemy1.x, enemy1.y, 10, 10));
                                fivHArr.forEach(bonus => {
                                    bonus.update500();
                                });
                                pointss += 5;
                            }
                        }
                    }, 0);
                }
            });
        });
        enemiess2.forEach((enemy2, index) => {
            enemy2.update(deltaTime);
            if (enemy2.markedForDeletion)
                enemiess2.slice(index, 1);
            shots.forEach((shot, index1) => {
                if (shot.x >= enemy2.x && shot.y >= enemy2.y && shot.y + 21 >= enemy2.y) {
                    booms.push(new boom_1.default(enemy2.x + 20, enemy2.y + 40, speed));
                    setTimeout(() => {
                        const myEnem = enemiess2.find(enemy2 => enemy2 === enemy2);
                        const myShot = shots.find(shot2 => shot2 === shot);
                        if (myEnem && myShot) {
                            pointss += 1;
                            enemiess2.splice(index, 1);
                            shots.splice(index1, 1);
                            if (enemiess2.length == 0) {
                                fivHArr.push(new fiveH_1.default(enemy2.x, enemy2.y, 10, 10));
                                fivHArr.forEach(bonus => {
                                    bonus.update500();
                                });
                                pointss += 5;
                            }
                        }
                    }, 0);
                }
            });
        });
        enemiess3.forEach((enemy3, index) => {
            enemy3.update(deltaTime);
            if (enemy3.markedForDeletion)
                enemiess3.slice(index, 1);
            shots.forEach((shot, index1) => {
                if (shot.x >= enemy3.x && shot.y >= enemy3.y && shot.y + 21 >= enemy3.y) {
                    booms.push(new boom_1.default(enemy3.x + 20, enemy3.y + 40, speed));
                    setTimeout(() => {
                        const myEnem = enemiess3.find(enemy2 => enemy2 === enemy2);
                        const myShot = shots.find(shot2 => shot2 === shot);
                        if (myEnem && myShot) {
                            pointss += 1;
                            enemiess3.splice(index, 1);
                            shots.splice(index1, 1);
                            if (enemiess3.length == 0) {
                                fivHArr.push(new fiveH_1.default(enemy3.x, enemy3.y, 10, 10));
                                fivHArr.forEach(bonus => {
                                    bonus.update500();
                                });
                                pointss += 5;
                            }
                        }
                    }, 0);
                }
            });
        });
        booms.forEach((boom, index) => {
            boom.updateBoom(deltaTime);
            if (boom.markedForDetection)
                booms.splice(index, 1);
        });
        booms.forEach((boom, index) => {
            boom.drawBoom();
        });
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
        if (toChange == 0) {
            if (plane.x <= 230) {
                plane.xx += 8;
                let flame = new Image();
                flame.src = './pics/flame.png';
                ctx.drawImage(flame, plane.x - 66, plane.y + 13, 80, 30);
                //106, 48
                plane.update();
            }
            else {
                toChange = 1;
            }
        }
        else {
            plane.update();
        }
        //console.log(plane.x, plane.y)
        //plane.drawCollisionShape()
        if (keys.left.pressed && keys.up.pressed || keys.up.pressed && keys.left.pressed || keys.up.pressed && keys.right.pressed || keys.down.pressed && keys.left.pressed || keys.down.pressed && keys.right.pressed) {
            console.log('chuj');
            return;
        }
        else if (keys.up.pressed) {
            if (plane.y <= 5) {
                return;
            }
            else {
                plane.yy = -4;
                return;
            }
        }
        else if (keys.down.pressed) {
            plane.yy = 5;
            return;
        }
        else if (keys.left.pressed) {
            plane.xx = -5;
            return;
        }
        else if (keys.right.pressed) {
            plane.xx = 5;
            return;
        }
        else if (keys.fire.pressed) {
            plane.yy = 0;
            plane.xx = 0;
            return;
        }
        else {
            plane.yy = 0;
            plane.xx = 0;
        }
    }
    animate(0);
    addEventListener('keydown', movePlane);
    addEventListener('keyup', keyupp);
    // addEventListener('keyup', movePlane1)
    function keyupp() {
        plane.imgstatek = 'plane1.png';
    }
    let x = 0;
    let y = 275;
    function movePlane(key) {
        if (key.keyCode == 87) {
            if (plane.y <= -10) {
                return;
            }
            else {
                //keys.up.pressed = true
                plane.yy = -15;
                console.log('W');
                plane.imgstatek = 'plane3.png';
            }
        }
        else if (key.keyCode == 65) {
            if (plane.x <= -5) {
                return;
            }
            else {
                //keys.left.pressed = true
                plane.xx = -15;
                console.log('A');
                plane.imgstatek = 'plane1.png';
            }
        }
        else if (key.keyCode == 83) {
            if (plane.y >= 590) {
                return;
            }
            else {
                //keys.down.pressed = true
                plane.yy = 15;
                console.log('S');
                plane.imgstatek = 'plane2.png';
            }
        }
        else if (key.keyCode == 68) {
            if (plane.x >= 970) {
                return;
            }
            else {
                //keys.right.pressed = true
                plane.xx = 15;
                console.log('D');
                plane.imgstatek = 'plane1.png';
            }
        }
        else if (key.keyCode == 70) {
            // if(plane.x <= 230){
            //     console.log('nie mozna strzelac')
            // }else {
            keys.fire.pressed = true;
            shots.push(new fire_1.default(plane.x + 70, plane.y + 18, 20, 0));
            // }
            console.log(shots);
        }
        else {
            //console.log(x,y)
            return;
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
exports["default"] = field;


/***/ }),

/***/ "./src/fire.ts":
/*!*********************!*\
  !*** ./src/fire.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Fire {
    constructor(x, y, xx, yy) {
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
    }
    drawFire() {
        let shots = new Image();
        shots.src = './pics/shots1.png';
        ctx.drawImage(shots, this.x, this.y, 21, 22);
    }
    updateFire() {
        this.drawFire();
        this.y += this.yy;
        this.x += this.xx;
    }
}
exports["default"] = Fire;


/***/ }),

/***/ "./src/first.ts":
/*!**********************!*\
  !*** ./src/first.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const field_1 = __importDefault(__webpack_require__(/*! ./field */ "./src/field.ts"));
const pressFire_1 = __importDefault(__webpack_require__(/*! ./pressFire */ "./src/pressFire.ts"));
function firstScreen() {
    let arr = [0,];
    const canvas = document.querySelector("canvas");
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    const image = new Image();
    let image1 = new Image();
    const imgs = ['1.png', '2.png', '3.png', '4.png'];
    image.addEventListener("load", e => {
        //proste rysowanie
        //rysowanie z przeskalowaniem
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        //ctx?.drawImage(image1, 432, 565, 200, 30);      
        //obwódka dla czytelności
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    });
    (0, pressFire_1.default)();
    window.addEventListener('keydown', ckeck, false);
    function ckeck(key) {
        if (key.keyCode == 70) {
            ctx.fillStyle = "black";
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 30, canvas.width, 30);
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 605, canvas.width, 30);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 90, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 545, canvas.width, 30);
            }, 100);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 150, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 485, canvas.width, 30);
            }, 150);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 210, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 425, canvas.width, 30);
            }, 200);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 270, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 365, canvas.width, 30);
            }, 250);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 300, canvas.width, 35);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 335, canvas.width, 30);
            }, 300);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 240, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 395, canvas.width, 30);
            }, 350);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 180, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 455, canvas.width, 30);
            }, 400);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 120, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 515, canvas.width, 30);
            }, 450);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 60, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 575, canvas.width, 30);
            }, 500);
            window.setTimeout(function () {
                ctx.fillStyle = "black";
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, 30);
                ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 635, canvas.width, 30);
                // pressFire(pressed)
            }, 550);
            window.setTimeout(function () {
                window.removeEventListener('keydown', ckeck);
                ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
                (0, field_1.default)(3);
            }, 600);
            //https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses
        }
    }
    image.src = "./pics/sc1.png";
}
exports["default"] = firstScreen;


/***/ }),

/***/ "./src/fiveH.ts":
/*!**********************!*\
  !*** ./src/fiveH.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class FiveH {
    constructor(x, y, xx, yy) {
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
    }
    draw500() {
        let fivHImg = new Image();
        fivHImg.src = './pics/500.png';
        //console.log(this.x, this.y)
        ctx.drawImage(fivHImg, this.x, this.y);
    }
    update500() {
        this.draw500();
        this.y -= this.yy;
        this.x -= this.xx;
    }
}
exports["default"] = FiveH;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const first_1 = __importDefault(__webpack_require__(/*! ./first */ "./src/first.ts"));
(0, first_1.default)();


/***/ }),

/***/ "./src/lifesAndGuns.ts":
/*!*****************************!*\
  !*** ./src/lifesAndGuns.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class LifesAndGuns {
    drawScore() {
        let score = new Image();
        score.src = './pics/score.png';
        ctx.drawImage(score, 0, -3, 50, 50);
    }
    drawGuns(guns) {
        let guns1 = new Image();
        guns1.src = './pics/guns' + guns + '.png';
        ctx.drawImage(guns1, 17, 3, 34, 15);
    }
    drawLifes(life) {
        let lifes = new Image();
        lifes.src = './pics/' + life + 'lifes.png';
        ctx.drawImage(lifes, 48, 20, 23, 23);
    }
}
exports["default"] = LifesAndGuns;


/***/ }),

/***/ "./src/plane.ts":
/*!**********************!*\
  !*** ./src/plane.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Plane {
    constructor(x, y, xx, yy) {
        this.imgstatek = 'plane1.png';
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
        this.width = 95;
        this.height = 60;
    }
    drawCollisionShape() {
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y);
        ctx.lineTo(this.x + 20, this.y);
        ctx.lineTo(this.x + 95, this.y + 30);
        ctx.lineTo(this.x + 60, this.y + 55);
        ctx.lineTo(this.x + 5, this.y + 55);
        ctx.strokeStyle = '#ff0000';
        ctx.closePath();
        ctx.stroke();
    }
    draw() {
        //ctx!.fillStyle = 'red'
        let statekk = new Image();
        let img = './pics/' + this.imgstatek;
        statekk.src = img;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(statekk, this.x, this.y, this.width, this.height);
        //console.log(this.x, this.y)
    }
    update() {
        this.draw();
        this.y += this.yy;
        this.x += this.xx;
    }
    firstFly() {
        this.draw();
        this.y += this.yy;
        this.x += this.xx;
    }
}
exports["default"] = Plane;


/***/ }),

/***/ "./src/points.ts":
/*!***********************!*\
  !*** ./src/points.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
class Points {
    constructor(points) {
        this.points = points;
    }
    drawPoints(points) {
        let strPoints = points.toString();
        let zero = new Image();
        zero.src = './score/0.png';
        let first = new Image();
        let second = new Image();
        let third = new Image();
        if (strPoints.length == 1) {
            if (points == 0) {
                ctx.drawImage(zero, 566, 0, 45, 39);
                ctx.drawImage(zero, 604, 0, 45, 39);
            }
            else {
                third.src = './score/' + strPoints + '.png';
                ctx.drawImage(third, 528, 0, 45, 39);
                ctx.drawImage(zero, 566, 0, 45, 39);
                ctx.drawImage(zero, 604, 0, 45, 39);
            }
        }
        else if (strPoints.length == 2) {
            second.src = './score/' + strPoints.charAt(0) + '.png';
            third.src = './score/' + strPoints.charAt(1) + '.png';
            ctx.drawImage(second, 490, 0, 45, 39);
            ctx.drawImage(third, 528, 0, 45, 39);
            ctx.drawImage(zero, 566, 0, 45, 39);
            ctx.drawImage(zero, 604, 0, 45, 39);
        }
        else if (strPoints.length == 3) {
            first.src = './score/' + strPoints.charAt(0) + '.png';
            second.src = './score/' + strPoints.charAt(1) + '.png';
            third.src = './score/' + strPoints.charAt(2) + '.png';
            ctx.drawImage(first, 452, 0, 45, 39);
            ctx.drawImage(second, 490, 0, 45, 39);
            ctx.drawImage(third, 528, 0, 45, 39);
            ctx.drawImage(zero, 566, 0, 45, 39);
            ctx.drawImage(zero, 604, 0, 45, 39);
        }
    }
}
exports["default"] = Points;


/***/ }),

/***/ "./src/pressFire.ts":
/*!**************************!*\
  !*** ./src/pressFire.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const setImg_1 = __importDefault(__webpack_require__(/*! ./setImg */ "./src/setImg.ts"));
function pressFire() {
    console.log('kolorki');
    let num = 1200;
    for (let a = 0; a < 10000; a++) {
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/4.png');
            //console.log('4')
        }, 1000 + num * a);
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/3.png');
            //console.log('3')
        }, 1200 + num * a);
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/2.png');
            //console.log('2')
        }, 1400 + num * a);
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/1.png');
            //console.log('1')
        }, 1600 + num * a);
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/2.png');
            //console.log('2')
        }, 1800 + num * a);
        window.setTimeout(function () {
            (0, setImg_1.default)('./pics/3.png');
            //console.log('3')
        }, 2000 + num * a);
    }
    // }
}
exports["default"] = pressFire;


/***/ }),

/***/ "./src/setImg.ts":
/*!***********************!*\
  !*** ./src/setImg.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function setIMG(imagePath) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    let img = new Image();
    img.onload = function () {
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 432, 565, 200, 30);
    };
    img.src = imagePath;
}
exports["default"] = setIMG;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;