const stg = document.getElementById("stage");
const ctx = stg.getContext("2d");
stg.style.opacity="0";
var heightratio = .8;
stg.height = stg.width*heightratio;

const sbox = document.getElementById("scorediv");

const mbut = document.getElementById("monitorbuttons");

//menu creation

const menu = document.getElementById("menu");


//play button creation

var sbut = document.getElementById("speedchanger");

const stg3 = document.getElementById("startbutton");

var mb=document.getElementById("moveb");

function mymove(s) {
    if(s.matches){
        {mb.style.opacity="1";}     
    }
    else
    {
        mb.style.opacity="0";
    }
}



stg3.onclick = function open()
{
    stg3.style.opacity="0";
    menu.style.opacity="0";
    stg.style.opacity = "1";
    sbut.style.opacity = "1";
    sbox.style.opacity = "1";
    mbut.style.opacity = "1";
    var s = window.matchMedia("(max-width:600px)")
    mymove(s)
    s.addListener(mymove)
    alert("please choose the snake speed value");
}

//creating the unit

const box = stg.width/40;

//loading the images of the food
let bag = new Image();
bag.src = "img3.jpg";

let foodimg = new Image();
foodimg.src = "img2.png";

let menuimg = new Image();
menuimg.src = "mimg.png";

//load audio files

let eat= new Audio();
eat.src = "eat.ogg";

let die = new Audio();
die.src = "die.mp3";

let move = new Audio();
move.src = "move.mp3";

//snake creation 

let snake = [];
snake[0]={
    x:20*box,
    y:15*box
}

//food generation

let food = {
    x:Math.floor(Math.random()*38+1)*box,
    y:Math.floor(Math.random()*30+1)*box
}

//Create the score counter
let score = 0;

//snake movement

let d;

document.addEventListener("keydown",direction);

function direction(event)
 {
    if(event.keyCode==37 && d!="RIGHT"){
        d="LEFT";
        move.play();
    }

    else if (event.keyCode==38 && d!="DOWN"){
        d="UP";
        move.play();
    }
    else if (event.keyCode==39 && d!="LEFT"){
        d="RIGHT";
        move.play();
    }
    else if (event.keyCode==40 && d!="UP"){
        d="DOWN";
        move.play();
    }
}

//check the collision condition of the snake 

function collision(head,array)
{
    for(let i = 0; i < array.length;i++)
    {
        if(head.x == array[i].x && head.y == array[i].y)
        {
            return true;
        }
    }
    return false;
}

//collision with the barriers

    var maze1X = 4*box;
    var maze1Y = 5*box;
    var maze1H = box;
    var maze1W = box;

    var maze2X = 4*box;
    var maze2Y = 25*box;
    var maze2H = box;
    var maze2W = box;

    var maze3X = 12*box;
    var maze3Y = 25*box;
    var maze3H = box;
    var maze3W = box;

    var maze4X = 28*box;
    var maze4Y = 5*box;
    var maze4H = box;
    var maze4W = box;

    var maze5X = 12*box;
    var maze5Y = 5*box;
    var maze5H = box;
    var maze5W = box;

    var maze6X = 35*box;
    var maze6Y = 5*box;
    var maze6H = box;
    var maze6W = box;

    var maze7X = 28*box;
    var maze7Y = 25*box;
    var maze7H = box;
    var maze7W = box;

    var maze8X = 35*box;
    var maze8Y = 25*box;
    var maze8H = box;
    var maze8W = box;

    var maze9X = 28*box;
    var maze9Y = 15*box;
    var maze9H = box;
    var maze9W = box;

    var maze10X = 21*box;
    var maze10Y = 5*box;
    var maze10H = box;
    var maze10W = box;

    var maze11X = 12*box;
    var maze11Y = 15*box;
    var maze11H = box;
    var maze11W = box;

    var maze12X = 21*box;
    var maze12Y = 25*box;
    var maze12H = box;
    var maze12W = box;

    var maze13X = 4*box;
    var maze13Y = 15*box;
    var maze13H = box;
    var maze13W = box;

    var maze14X = 35*box;
    var maze14Y = 15*box;
    var maze14H = box;
    var maze14W = box;

function bcollision(head) 
{
    if(head.x > maze1X-maze1W && head.x < maze1X+maze1W && head.y > maze1Y-maze1H && head.y < maze1Y+maze1H)
    {
        return true;
    }
    if(head.x > maze2X-maze2W && head.x < maze2X+maze2W && head.y > maze2Y-maze2H && head.y < maze2Y+maze2H)
    {
        return true;
    }
    if(head.x > maze3X-maze3W && head.x < maze3X+maze3W && head.y > maze3Y-maze3H && head.y < maze3Y+maze3H)
    {
        return true;
    }
    if(head.x > maze4X-maze4W && head.x < maze4X+maze4W && head.y > maze4Y-maze4H && head.y < maze4Y+maze4H)
    {
        return true;
    }
    if(head.x > maze5X-maze5W && head.x < maze5X+maze5W && head.y > maze5Y-maze5H && head.y < maze5Y+maze5H)
    {
        return true;
    }
    if(head.x > maze6X-maze6W && head.x < maze6X+maze6W && head.y > maze6Y-maze6H && head.y < maze6Y+maze6H)
    {
        return true;
    }
    if(head.x > maze7X-maze7W && head.x < maze7X+maze7W && head.y > maze7Y-maze7H && head.y < maze7Y+maze7H)
    {
        return true;
    }
    if(head.x > maze8X-maze8W && head.x < maze8X+maze8W && head.y > maze8Y-maze8H && head.y < maze8Y+maze8H)
    {
        return true;
    }
    if(head.x > maze9X-maze9W && head.x < maze9X+maze9W && head.y > maze9Y-maze9H && head.y < maze9Y+maze9H)
    {
        return true;
    }
    if(head.x > maze10X-maze10W && head.x < maze10X+maze10W && head.y > maze10Y-maze10H && head.y < maze10Y+maze10H)
    {
        return true;
    }
    if(head.x > maze11X-maze11W && head.x < maze11X+maze11W && head.y > maze11Y-maze11H && head.y < maze11Y+maze11H)
    {
        return true;
    }
    if(head.x > maze12X-maze12W && head.x < maze12X+maze12W && head.y > maze12Y-maze12H && head.y < maze12Y+maze12H)
    {
        return true;
    }
    if(head.x > maze13X-maze13W && head.x < maze13X+maze13W && head.y > maze13Y-maze13H && head.y < maze13Y+maze13H)
    {
        return true;
    }
    if(head.x > maze14X-maze14W && head.x < maze14X+maze14W && head.y > maze14Y-maze14H && head.y < maze14Y+maze14H)
    {
        return true;
    }
}

//food shouldn't generate on the maze 

function nfood ()
{
    if(food.x > maze1X-maze1W && food.x < maze1X+maze1W && food.y > maze1Y-maze1H && food.y < maze1Y+maze1H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze2X-maze2W && food.x < maze2X+maze2W && food.y > maze2Y-maze2H && food.y < maze2Y+maze2H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze3X-maze3W && food.x < maze3X+maze3W && food.y > maze3Y-maze3H && food.y < maze3Y+maze3H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        } 
    }
    if(food.x > maze4X-maze4W && food.x < maze4X+maze4W && food.y > maze4Y-maze4H && food.y < maze4Y+maze4H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze5X-maze5W && food.x < maze5X+maze5W && food.y > maze5Y-maze5H && food.y < maze5Y+maze5H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze6X-maze6W && food.x < maze6X+maze6W && food.y > maze6Y-maze6H && food.y < maze6Y+maze6H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze7X-maze7W && food.x < maze7X+maze7W && food.y > maze7Y-maze7H && food.y < maze7Y+maze7H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze8X-maze8W && food.x < maze8X+maze8W && food.y > maze8Y-maze8H && food.y < maze8Y+maze8H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze9X-maze9W && food.x < maze9X+maze9W && food.y > maze9Y-maze9H && food.y < maze9Y+maze9H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze10X-maze10W && food.x < maze10X+maze10W && food.y > maze10Y-maze10H && food.y < maze10Y+maze10H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze11X-maze11W && food.x < maze11X+maze11W && food.y > maze11Y-maze11H && food.y < maze11Y+maze11H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze12X-maze12W && food.x < maze12X+maze12W && food.y > maze12Y-maze12H && food.y < maze12Y+maze12H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }  
    }
    if(food.x > maze13X-maze13W && food.x < maze13X+maze13W && food.y > maze13Y-maze13H && food.y < maze13Y+maze13H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
    if(food.x > maze14X-maze14W && food.x < maze14X+maze14W && food.y > maze14Y-maze14H && food.y < maze14Y+maze14H)
    {
        food = {
            x:Math.floor(Math.random()*38+1)*box,
            y:Math.floor(Math.random()*30+1)*box
        }
    }
}

//implanting to the canvas

function lt(){
    d="LEFT";
}

function ut(){
    d="UP";
}

function rt(){
    d="RIGHT";
}

function dt(){
    d="DOWN";
}


function draw()
 {
    
    /*ctx.drawImage(bag,0,0);*/
    ctx.fillStyle=" bisque";
    ctx.fillRect(0,0,stg.width,stg.height);

    //placing the menu image 
   /* ctx2.drawImage(menuimg,0,0,stg2.width,stg2.height);*/

    //snake color filling

    for(let i=0; i < snake.length; i++)
    {
        ctx.fillStyle = (i == 0)? "crimson" : "yellow";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle ="black";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodimg,food.x,food.y,box,box);
        
    //old head position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //the snake movement direction

    if(d=="LEFT")snakeX -=box;
    if(d=="UP")snakeY -=box;
    if(d=="RIGHT")snakeX +=box;
    if(d=="DOWN")snakeY +=box;

    //if snake eats the food

    if(snakeX == food.x && snakeY == food.y)
    {
        score++;
        eat.play();
        document.getElementById("svalue").innerHTML=score;
        food= {
            x:Math.floor(Math.random()*38+1) * box,
            y:Math.floor(Math.random()*30+1) * box
        } 
        nfood();//we don,t remove tail
    }
        
    else  
    {
        //remove the tail
        snake.pop();
    }

    //new head position 

    let newhead = {
        x:snakeX,
        y:snakeY
    }

    //gameover rules

    if(snakeX < 0 * box || snakeX > 39 * box || snakeY < 0 * box || snakeY > 31 * box || collision(newhead,snake) || bcollision(newhead))
    {
        clearInterval(game);
        die.play();
        alert("GAMEOVER...RELOAD THE PAGE THE PLAY AGAIN");
    }

    //maze creation
 
    ctx.fillStyle="#8a7254";
    ctx.fillRect(maze1X,maze1Y,maze1W,maze1H);
    ctx.fillRect(maze2X,maze2Y,maze2W,maze2H);
    ctx.fillRect(maze3X,maze3Y,maze3W,maze3H);
    ctx.fillRect(maze4X,maze4Y,maze4W,maze4H);
    ctx.fillRect(maze5X,maze5Y,maze5W,maze5H);
    ctx.fillRect(maze6X,maze6Y,maze6W,maze6H);
    ctx.fillRect(maze7X,maze7Y,maze7W,maze7H);
    ctx.fillRect(maze8X,maze8Y,maze8W,maze8H);
    ctx.fillRect(maze9X,maze9Y,maze9W,maze9H);
    ctx.fillRect(maze10X,maze10Y,maze10W,maze10H);
    ctx.fillRect(maze11X,maze11Y,maze11W,maze11H);
    ctx.fillRect(maze12X,maze12Y,maze12W,maze12H);
    ctx.fillRect(maze13X,maze13Y,maze13W,maze13H);
    ctx.fillRect(maze14X,maze14Y,maze14W,maze14H);
    snake.unshift(newhead);
    
    
}

//call the draw function 

let game;

var x=document.getElementById("speedchanger");

var gspeed;

x.onchange = function check(){
    gspeed=x.value;
}

function confirm() {
    game=setInterval(draw,gspeed);
}