// function setup() {
//   createCanvas(640, 480);
//   background ('Gainsboro ');
// }
//
// function draw() {
//     rect (90,200,100,220);
//     ellipse (width/2.0, height/2.0, 100, 100);
//     for(var x = 20; x < 640; x=x+40){
//       ellipse(x, height/2.0, 40, 40);
//     }
//     for (var y = 20; y<height; y+=40){
//       for(var x =20; x< width; x += 40){
//         fill('Gold');
//         stroke('black');
//         strokeWeight(1);
//         ellipse(x, y, 30, 30);
//       }
//     }
//       flower(80,160,200,300);
//
//       noFill();
//       stroke(225,39);
//       noLoop();
//       drawCircle (width/2, height/2, 200)
// }
//
// function flower (x,y,size){
//   fill('indigo');
//   stroke('khaki');
//   ellipse(x, y, size, size);
// }
//   function drawCircle(x,y, size){
//     ellipse(x,y,size,size);
//     if (size >10){
//       var new_size = size/2;
//       drawCircle(x + new_size, y, new_size);
//       drawCircle(x - new_size, y, new_size);
//     }
//   }
