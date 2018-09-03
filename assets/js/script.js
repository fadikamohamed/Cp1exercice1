var c = document.getElementById('house');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(200,0);
ctx.closePath();
ctx.fillStyle = '#D38435';
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(300,300);
ctx.lineTo(100,300);
ctx.closePath();
ctx.fillStyle = '#A4D7E7';
ctx.fill();

ctx.beginPath();
ctx.moveTo(115,115);
ctx.lineTo(160,115);
ctx.lineTo(160,160);
ctx.lineTo(115,160);
ctx.lineTo(115,115);
ctx.fillStyle = '#C9C9C9';
ctx.fill();

ctx.beginPath();
ctx.moveTo(240,115);
ctx.lineTo(285,115);
ctx.lineTo(285,160);
ctx.lineTo(240,160);
ctx.lineTo(240,115);
ctx.fillStyle = '#C9C9C9';
ctx.fill();


ctx.beginPath();
ctx.moveTo(175,225);
ctx.lineTo(225,225);
ctx.lineTo(225,300);
ctx.lineTo(175,300);
ctx.lineTo(175,225);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
