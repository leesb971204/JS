var num = 0;
function testFnc() {
  num++;
  console.log(num);
  if (num == 10) return;
  testFnc();
}

testFnc();
