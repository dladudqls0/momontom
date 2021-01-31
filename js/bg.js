export class Background{
    constructor(IMG_NUMBER){
        this.body = document.querySelector('body');
        this.randomNumber = this.getRandom(IMG_NUMBER);
        this.paintImage();
    }
    paintImage(){
        const img = new Image();
        img.src=`./img/${this.randomNumber}.jpg`;
        img.classList.add('bgImage');
        this.body.appendChild(img);
    }
    getRandom(n){
        const number = Math.floor(Math.random()*n+1);
        return number;
    }
}