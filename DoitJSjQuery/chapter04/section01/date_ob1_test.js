var today = new Date();
var nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDay = today.getDay();

console.log("오늘 날짜 정보");
console.log("현재 월: " + nowMonth);
console.log("현재 일: " + nowDate);
console.log("현재 요일: " + nowDay);

var worldcup = new Date(2002, 4, 31);
var theMonth = worldcup.getMonth(),
  theDate = worldcup.getDate(),
  theDay = worldcup.getDay();

console.log("월드컵 날짜 정보");
console.log("몇 월: " + theMonth);
console.log("몇 일: " + theDate);
console.log("무슨 요일: " + theDay);
