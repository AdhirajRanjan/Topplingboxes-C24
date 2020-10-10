class box
{
    constructor(x,y,w,h)
    {
        var ball_options =
        {
            restitution: 0.7
        }
    
        this.ball = Bodies.rectangle(x,y,w,h, ball_options);
        this.w = w;
        this.h = h;
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
