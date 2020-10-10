class log
{
    constructor(x,y,h,angle)
    {
        var ball_options =
        {
            restitution: 0.7
        }
    
        this.ball = Bodies.rectangle(x,y,20,h, ball_options);
        this.w = 20;
        this.h = h;
        Matter.Body.setAngle(this.ball, angle)        
        //this.c = c;
        World.add(world,this.ball);
    }
    display()
    {
        var angle = this.ball.angle;
        push();
        //rotate(angle)
        rectMode(CENTER);
        rect(this.ball.position.x, this.ball.position.y, this.w, this.h);
        pop();
    }
}
