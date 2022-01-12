(function () {
  var num = 100;
  function menu() {
    num += 100;
    console.log(num);
  }
  menu();
})();

(function () {
  var num = 100;
  function menu() {
    console.log(num);
  }
});
