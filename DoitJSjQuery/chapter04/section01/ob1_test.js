var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  console.log("tv 색상:" + this.color);
  console.log("tv 가격:" + this.price);
};

var car = {
  color: "black",
  price: 50000000,
  info: function () {
    console.log("car 색상:" + this.color);
    console.log("car 가격:" + this.price);
  },
};
tv.info();

car.info();
