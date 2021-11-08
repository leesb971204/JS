var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;
result = a > b || b >= m || m > n;
console.log(result);

result = a > b || b >= m || m <= n;
console.log(result);

result = a <= b && b >= m && m <= n;
console.log(result);

result = a <= b && b <= m && m <= b;
console.log(result);

result = !(a > b);
console.log(result);
