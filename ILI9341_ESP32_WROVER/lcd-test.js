analogWrite(D2, 100);
analogWrite(D0, 0);
analogWrite(D4, 200);
SPI1.setup({miso: D25, mosi: D23, sck: D19, baud: 500000});
var g = require('ILI9341').connect(SPI1, D21, D22, D18, function(){
  g.rotate(0, 1);
  g.clear();
  g.drawString("Hello",0,0);
  g.setFontVector(20);
  g.setColor(0,0.5,1);
  g.drawString("Espruino",0,10);
});