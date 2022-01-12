var count = 0;

myFnc();

function myFnc() {
  count++;
  console.log("hello " + count);
}

myFnc();

var theFnc = function () {
  count++;
  console.log("bye " + count);
};

theFnc();
