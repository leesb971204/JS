var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");
console.log(greenArr);

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

yellowArr.push(data2);
console.log(yellowArr);

yellowArr.unshift(data1);
console.log(yellowArr);
