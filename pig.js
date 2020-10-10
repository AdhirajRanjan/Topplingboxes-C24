class pig
{
    constructor(x,y)
    {
        var ball_options =
        {
            restitution: 0.7
        }
    
        this.ball = Bodies.rectangle(x,y,30,30, ball_options);
        this.w = 30;
        this.h = 30;
        //this.c = c;
        World.add(world,this.ball);
    }
    display()
    {
        var angle = this.ball.angle;
        push();
        rotate(angle)
      
        stroke ("yellow")
        strokeWeight(5)
        rect(this.ball.position.x, this.ball.position.y, this.w, this.h);
        pop();
    }
}