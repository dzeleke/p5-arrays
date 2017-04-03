var numbers= [45, 50, 65, 80]; 
var positivity = ["SMILE", "HOPE", "INSPIRE", "GLOW", "CREATE", "ASPIRE"];
var j = 0;
var r1 = 90;
var b1 = 250;
var g1 = 150;
var e1 = 20;

function setup(){
    createCanvas(1350,400);
}

function draw(){
    background (255,140,140);
    
    for(var i = 0; i < 4; i++){
    stroke(255);
    noFill();
    ellipse((i + 1)*100,200,numbers[i], numbers[i]);
    }
    
  
  

  fill(r1, 0, b1);
  textSize(70);
  textStyle(BOLD);
  
  text (positivity[j], 230,150);
  
}

function mousePressed(){
    j++;
    r1 += 150;
    b1 += 50;
    g1 += 10;
    e1 += 90; 
    
    
    if(j==positivity.length){
        j=0;
        r1 = 0;
        b1 = 0;
    }
}