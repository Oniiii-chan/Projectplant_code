var five = require("johnny-five"),
  board, lcd;

board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20

  });


//first line of lcd
  lcd.clear().print("It will be okay");
  lcd.cursor(1, 0)
  //last line of lcd
lcd.print("Keep calm, relax");

  this.repl.inject({
    lcd: lcd
  });
});
