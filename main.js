canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

car_width = 200;
car_height =100;

background_img = "istockphoto-1156933946-612x612.jpg";
car1_img = "download.jpg";
car2_img = "45-458246_2d-race-cars-2d-race-car-png-transparent.png"

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 150;

function add() {

    background_imgtag = new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src= background_img;

    car1_imgtag = new Image();
    car1_imgtag.onload= uploadcar1;
    car1_imgtag.src= car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload= uploadcar2;
    car2_imgtag.src= car2_img;
}

function  uploadbackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function  uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car_width,car_height);
}

function  uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car_width,car_height);
}

function  uploadcar2() {
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed=="38"){
    up();
    console.log("up");
}

if(keyPressed=="40"){
    down();
    console.log("down");
}

if(keyPressed=="37"){
    left();
    console.log("left");
}

if(keyPressed=="39"){
    right();
    console.log("right");
}
}