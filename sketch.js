var fixedRect, movingRect;


function setup()
{
  createCanvas(1200,800);

  //Types of dataStructe

 
  //string 

  var name = " shreya";
  console.log(name);

  //number

   var score = 99;

 //  console.log(score);

  //boolean

  var pass = true;

  //console.log(" Pass:  &&&DKadku238u94hdfAFOR8"+ pass);


  // undefined

  var teachername;

  //console.log(" TeacherName "+ teachername);


  //null

   var test = null;

  // console.log("test"+ test);

  // array

  var scr = [99,  " Meenu",100,"Shreya", 100, pass, teachername, test];

  scr.push(45);
  
console.log(scr);

  //console.log(scr.length);

  //console.log("Array  Value reading : " + scr[1])
 

  var array = [["Meenu", " shreya ", " name " , " theye" , " dahdh"], [" Class","White", " Laptop", " fun"],[1,34,56,78], [" Meenu", 56,78]]
  
  array.push(["class31", "Bird Traj"],["class32", " Doubts"]);
   console.log(array);
   console.log(array.length);

   console.log(array[3][0]);


  




  














 /* fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect=createSprite(400,400,50,50);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect.velocityX=-1;
  movingRect.velocityX=1;


  console.log("fixed Rect x pos"+ fixedRect.y);*/
  
}

function draw() 
{
  background("pink");  

 /* console.log("moving rect - xpos"+movingRect.y)



 // movingRect.x = mouseX;
  //movingRect.y = mouseY;


if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
  {

    movingRect.velocityX=movingRect.velocityX * (-1);
  fixedRect.velocityX= fixedRect.velocityX *((-1)) }

  


   

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();*/

}