function TestScore(name, kor, eng) {
  this.userName = name;
  this.korNum = kor;
  this.engNum = eng;

  this.getTestInfo = function () {
    console.log("이름: " + this.userName);
    console.log("국어: " + this.korNum);
    console.log("영어: " + this.engNum);
  };
  this.getAvg = function () {
    return (this.korNum + this.engNum) / 2;
  };
}

var kimgun = new TestScore("김군", 80, 90);
var ohgun = new TestScore("오군", 100, 80);

kimgun.getTestInfo();
console.log("평균 점수: " + kimgun.getAvg());

ohgun.getTestInfo();
console.log("평균 점수:  " + ohgun.getAvg());
