export default function setIMG(imagePath : string) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    let img =new Image();
    img.onload = function(){
          ctx?.drawImage(img, 432, 565, 200, 30);
    };
    img.src=imagePath;
}