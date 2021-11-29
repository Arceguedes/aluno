let wolf_img: p5.Image;

function carregou(){
    console.log("carregou!")
}

function falhou(){
    console.log("falhou!")
}

function preload() {
    wolf_img = loadImage('../sketch/lobol.png',carregou,falhou);
}

function setup() {
    createCanvas(400, 400);
}

function draw(){
    image(wolf_img, 0, 0, 400, 400)
}