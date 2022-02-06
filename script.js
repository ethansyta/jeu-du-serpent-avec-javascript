const Game_size = 600;
const square_size = 20;
let xCoord = 0;
let yCoord = 0;
let canvasWidth = 100;
let CanvasHeight = 50;



let canvas = document.getElementById("game");
let ctx = canvas.getContext('2d');
ctx. fillStyle = "red";
ctx.fillRect( 10, 10, 100, 50);





class snake{
    constructor(size)
    {
        this.x = 0;
        this.y = 0;
        this.size = size;
        this.blockSize = size;
    }
  
}


//const snakee = new snake (square_size);

function update(xCoord,yCoord)
{
    snake.update
    
    xCoord += 2;
    yCoord += 2;
    setTimeout(update, 300);
    ctx.fillRect(xCoord, yCoord, canvasWidth, CanvasHeight);
    
}

//function start()
{

    update();
}
//start();

update();







/*class Block
{
    constructor ( x, y, size)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        
        this.blocka = [];
        this.block = (this.x, this.y);
        console.log(this.blocks);
    
    }
        let newBlock = new Block (x, y, this.size);
        this.blocka = Block.push(blocka);
    
    
    update()
    {
        for(let newBlock of this.blocka)
        {
            block.draw();

        }
    }


    draw()
    {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
    }
}*/



