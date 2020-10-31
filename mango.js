class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png");

		this.mango1Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango2Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango3Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango4Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango5Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango6Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango7Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango8Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango9Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.mango10Body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)


		World.add(world, this.mango1Body);
		World.add(world, this.mango2Body);
		World.add(world, this.mango3Body);
		World.add(world, this.mango4Body);
		World.add(world, this.mango5Body);
		World.add(world, this.mango6Body);
		World.add(world, this.mango7Body);
		World.add(world, this.mango8Body);
		World.add(world, this.mango9Body);
		World.add(world, this.mango10Body);


	}
	display()
	{
			
			var posMango1=this.mango1Body.position;
			var posMango2=this.mango2Body.position;		
			var posMango3=this.mango3Body.position;		
			var posMango4=this.mango4Body.position;		
			var posMango5=this.mango5Body.position;		
			var posMango6=this.mango6Body.position;		
			var posMango7=this.mango7Body.position;		
			var posMango8=this.mango7Body.position;		
			var posMango9=this.mango7Body.position;		
			var posMango10=this.mango7Body.position;		


			push()
			translate(posMango1.x, posMango1.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
			push()
			translate(posMango2.x, posMango2.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			pop()

			push()
			translate(posMango3.x, posMango3.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()

			push()
			translate(posMango4.x, posMango4.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()

			push()
			translate(posMango5.x, posMango5.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()

			push()
			translate(posMango6.x, posMango6.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
			push()
			translate(posMango7.x, posMango7.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
             pop()
			push()
			translate(posMango8.x, posMango8.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()

			push()
			translate(posMango9.x, posMango9.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()


			push()
			translate(posMango10.x, posMango10.y);
			rectMode(CENTER)
			//strokeWeight(4);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()


	}

}