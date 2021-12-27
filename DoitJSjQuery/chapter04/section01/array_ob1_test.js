var arr = [30, "따르릉", true];

console.log("배열값 가져오기 - 1");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log("배열값 가져오기 - 2");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("배열값 가져오기 - 3");
for (i in arr) {
  console.log(arr[i]);
}
