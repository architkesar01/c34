class Ball
{
	constructor(x,y,width,height,angle)
	{
		var options={
		
			
			frictionAir:0.0005,
			density:1
			
			}
		
		this.width=width
        this.height=height
		
		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);

	}
	display()
	{
			
			var angle=this.body.angle;
			push()
			translate(this.body.position.x,this.body.position.y);
			ellipseMode(CENTER);		
			fill("red")
			ellipse(0,0,this.width, this.height);
			pop()
			
	}
}