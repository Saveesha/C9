var box 

function setup() {
    createCanvas(400,400);
box = createSprite(200,200,40,40)
box.shapeColor = "purple"
}

function draw()
{
    background("lightyellow");

if (keyIsDown(RIGHT_ARROW))
    {
        background("pink")
    }
    
    if (keyIsDown(LEFT_ARROW))
    {
        background("lightgreen")
    }
    
    if (keyIsDown(UP_ARROW))
    {
        background("lightblue")
    }
    
    if (keyIsDown(DOWN_ARROW))
    {
        background("red")
    }

    drawSprites();
}