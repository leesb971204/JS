function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHieght = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;
  CheckWeight.prototype.getInfo = function () {
    var str = "";
    str += "이름: " + this.userName + ", ";
    str += "키: " + this.userHieght + ", ";
    str += "몸무게: " + this.userWeight;
    return str;
  };
  CheckWeight.prototype.getResult = function () {
    this.minWeight = (this.userHieght - 100) * 0.9 - 5;
    this.maxWeight = (this.userHieght - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else if (this.userWeight > this.maxWeight) {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박달재", 180, 88);
console.log(park.getInfo());
console.log(park.getResult());
console.log(jang.getResult === park.getResult);